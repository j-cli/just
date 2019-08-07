import { justConfig, APP_DIRECTORY } from './scripts/Config'
const merge = require('webpack-merge')

export = function override(config: any, env: any) {
  // assign webpack
  if (typeof justConfig.webpack === 'object') {
    config = merge(config, justConfig.webpack)
  } else if (typeof justConfig.webpack === 'function') {
    config = justConfig.webpack(APP_DIRECTORY, config, env)
  }

  if (justConfig.hot) {
    const rewireReactHotLoader = require('react-app-rewire-hot-loader')
    config = rewireReactHotLoader(config, env)
  }

  // HtmlWebpackPlugin inject
  config.plugins[0].options.title = justConfig.title || 'Create React App'

  return config
}
