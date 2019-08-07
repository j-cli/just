import { Command, CommandMajor } from 'func'
import { Base } from './Base'

@CommandMajor()
@Command({ name: 'start' })
export class Start extends Base {
  public constructor() {
    super()
    this.start()
  }

  private start() {
    this.init()

    require('react-app-rewired/scripts/start')
  }
}
