import {Command} from '@oclif/core'
import color from '@oclif/color'
import Hyperbeam from 'hyperbeam'

export default class Beam extends Command {
  static description = 'Beam any content'

  static examples = [
    '$ ferret beam # chatroom', '$ cat file.mp4 | ferret beam # file transfer', '$ arecord | ferret beam | aplay # live audio ',
  ]

  static flags = {}

  async run(): Promise<void> {
    const beam = new Hyperbeam()

    this.log(`Beam created! Have other peers run ${color.green(`ferret connect ${beam.key}`)}`)
    process.stdin.pipe(beam).pipe(process.stdout)
  }
}
