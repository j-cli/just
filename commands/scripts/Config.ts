import { realpathSync, existsSync } from 'fs'
import { resolve } from 'path'
import { homedir } from 'os'

export const APP_DIRECTORY = realpathSync(process.cwd())

export const justConfigPath = resolve(APP_DIRECTORY, 'just.config.js')
export const justConfigGlobalPath = resolve(homedir(), 'just.config.js')

export const resolveRoot = (dir: string) => resolve(__dirname, '..', '..', dir)

export interface JustConfig {
  public?: string
  webpack?: any
  hot?: boolean
  title?: string
}

let justConfig: JustConfig = { hot: false }

if (existsSync(justConfigPath)) {
  Object.assign(justConfig, require(justConfigPath))
}
if (existsSync(justConfigGlobalPath)) {
  Object.assign(justConfig, require(justConfigGlobalPath))
}

export { resolve, justConfig }
