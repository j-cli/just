import { Command } from 'func'
import { Base } from './Base'

@Command({ name: 'build' })
export class Build extends Base {
  public constructor() {
    super()
    this.build()
  }

  private build() {
    this.init()
    require('react-app-rewired/scripts/build')
  }
}
