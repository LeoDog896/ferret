import {Command} from '@oclif/core'
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

    this.log('Ferreting:')
    this.log(`Have other peers run ferret connect ${beam.key}`)
    process.stdin.pipe(beam).pipe(process.stdout)
  }
}
