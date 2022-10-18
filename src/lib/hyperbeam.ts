import {Duplex} from 'streamx'
import b32 from 'hi-base32'
import DHT from '@hyperswarm/dht'
import {randomBytes} from 'node:crypto'

export default class Hyperbeam extends Duplex {
  key: string;
  announce: boolean;
  private _server = null
  private _out = null
  private _inc = null
  private _dht: typeof DHT
  private _now = Date.now()
  private _ondrain = null
  private _onopen = null
  private _onread = null
  constructor(key: string, options?: { announce: boolean }) {
    super()

    let announce = Boolean(options?.announce)

    if (!key) {
      key = toBase32(randomBytes(32))
      announce = true
    }

    this.key = key
    this.announce = announce
    this._server = null
    this._out = null
    this._inc = null
    this._dht = null
    this._now = Date.now()
    this._ondrain = null
    this._onopen = null
    this._onread = null
  }

  get connected(): boolean {
    return Boolean(this._out)
  }

  _ondrainDone(err): void {
    if (this._ondrain) {
      const cb = this._ondrain
      this._ondrain = null
      cb(err)
    }
  }

  _onreadDone(err): void {
    if (this._onread) {
      const cb = this._onread
      this._onread = null
      cb(err)
    }
  }

  _onopenDone(err): void {
    if (this._onopen) {
      const cb = this._onopen
      this._onopen = null
      cb(err)
    }
  }

  async _open(cb): void {
    const keyPair = DHT.keyPair(fromBase32(this.key))

    this._onopen = cb

    if (!this._dht) this._dht = new DHT({ephemeral: true})

    const onConnection = s => {
      s.on('data', data => {
        if (!this._inc) {
          this._inc = s
          this._inc.on('error', err => this.destroy(err))
          this._inc.on('end', () => this._push(null))
        }

        if (s !== this._inc) return
        if (this._push(data) === false) s.pause()
      })

      s.on('end', () => {
        if (this._inc) return
        this._push(null)
      })

      if (!this._out) {
        this._out = s
        this._out.on('error', err => this.destroy(err))
        this._out.on('drain', () => this._ondrain(null))
        this.emit('connected')
        this._onopenDone(null)
      }
    }

    if (this.announce) {
      this._server = this._dht.createServer({
        firewall(remotePublicKey) {
          return !remotePublicKey.equals(keyPair.publicKey)
        },
      })
      this._server.on('connection', onConnection)
      try {
        await this._server.listen(keyPair)
      } catch (error) {
        this._onopenDone(error)
        return
      }

      this.emit('remote-address', {host: this._dht.host, port: this._node.port})
      return
    }

    const connection = this._dht.connect(keyPair.publicKey, {keyPair})
    try {
      await new Promise((resolve, reject) => {
        connection.once('open', resolve)
        connection.once('close', reject)
        connection.once('error', reject)
      })
    } catch (error) {
      this._onopenDone(error)
      return
    }

    this.emit('remote-address', {host: this._dht.host, port: this._dht.port})
    onConnection(connection)
  }

  _read(cb) {
    this._onread = cb
    if (this._inc) this._inc.resume()
  }

  _push(data) {
    const res = this.push(data)
    process.nextTick(() => this._onreadDone(null))
    return res
  }

  _write(data, cb) {
    if (this._out.write(data) !== false) return cb(null)
    this._ondrain = cb
  }

  _final(cb) {
    const done = () => {
      this._out.removeListener('finish', done)
      this._out.removeListener('error', done)
      cb(null)
    }

    this._out.end()
    this._out.on('finish', done)
    this._out.on('error', done)
  }

  _predestroy() {
    if (this._inc) this._inc.destroy()
    if (this._out) this._out.destroy()
    const err = new Error('Destroyed')
    this._onopenDone(err)
    this._onreadDone(err)
    this._ondrainDone(err)
  }

  async _destroy(cb) {
    if (!this._dht) return cb(null)
    if (this._server) await this._server.close().catch(error => {})
    await this._dht.destroy().catch(error => {})
    cb(null)
  }
}

function toBase32(buf: Buffer): string {
  return b32.encode(buf).replace(/=/g, '').toLowerCase()
}

function fromBase32(str: string): Buffer {
  return Buffer.from(b32.decode.asBytes(str.toUpperCase()))
}
