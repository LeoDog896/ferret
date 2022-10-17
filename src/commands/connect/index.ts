import {Command} from '@oclif/core'
import color from '@oclif/color'
import Hyperbeam from 'hyperbeam'

export default class Connect extends Command {
  static description = 'Connect to a hyperbeam to recieve connections'

  static examples = [
    `$ ferret connect l7by37t6qwabykjmpedwhnsirg3zrzpqtv5yoehmjam3nkmmhzaa

`,
  ]

  static flags = {}

  // TODO password input with prompt / enviornment variable

  static args = [{name: 'ID', description: 'The beam ID to connect to', required: true}]

  async run(): Promise<void> {
    const {args} = await this.parse(Connect)
    const id = args.ID

    const beam = new Hyperbeam(id)
    this.log(`Ferreted! Have other peers run ${color.green(`ferret connect ${id}`)}`)

    process.stdin.pipe(beam).pipe(process.stdout)
  }
}
