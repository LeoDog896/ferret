import {Command} from '@oclif/core'
import Hyperbeam from 'hyperbeam'

export default class Hello extends Command {
  static description = 'Share TCP ports'

  static examples = [
    `$ ferret tcp 25565

`,
  ]

  static flags = {}

  // TODO password input with prompt / enviornment variable

  static args = [{name: 'port', description: 'The port to use', required: true}]

  async run(): Promise<void> {
    const {args} = await this.parse(Hello)
    const port = args.port

    const beam = new Hyperbeam()

    this.log(`Ferreting ${port}:`)
    this.log(`Have other peers run ferret connect ${beam.key}`)
  }
}
