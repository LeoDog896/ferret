import {Command} from '@oclif/core'
import color from '@oclif/color'
import Hyperbeam from 'hyperbeam'

export default class Beam extends Command {
  static description = 'Beam any content'

  static examples = [
    `$ ferret beam

`,
  ]

  static flags = {}

  // TODO password input with prompt / enviornment variable

  async run(): Promise<void> {
    const beam = new Hyperbeam()

    this.log(`Beam created! Have other peers run ${color.green(`ferret connect ${beam.key}`)}`)
    process.stdin.pipe(beam).pipe(process.stdout)
  }
}
