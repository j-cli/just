import { resolveRoot, APP_DIRECTORY, resolve, justConfig } from './Config'
import { existsSync } from 'fs'

export class Base {
  public init() {
    // patch
    const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
    require.cache[require.resolve('react-dev-utils/checkRequiredFiles')] = {
      exports() {
        if (!existsSync(resolve(APP_DIRECTORY, 'public'))) {
          require('react-scripts/config/paths').appPublic =
            justConfig.public || resolveRoot('public')
          require('react-scripts/config/paths').appHtml = justConfig.public
            ? resolve(justConfig.public, 'index.html')
            : resolveRoot('public/index.html')
        }

        return checkRequiredFiles(...arguments)
      }
    }

    // console.log(
    //   require('react-scripts/config/paths').appHtml,
    //   require('react-scripts/config/paths').appPublic
    // )
    require('react-app-rewired/scripts/utils/paths').configOverrides = resolveRoot(
      'cli/react-rewired.js'
    )
  }
}
