import { Command } from 'func'
import { Base } from './Base'
import which from 'which'
import chalk from 'chalk'
import { execSync, spawnSync } from 'child_process'
import { APP_DIRECTORY as CWD, resolve } from './Config'

@Command({ name: 'create' })
export class Create extends Base {
  private APP_DIRECTORY = resolve(CWD, process.argv.slice().pop()!)

  public constructor() {
    super()
    this.create()
  }

  private removeReactScripts() {
    execSync('yarn remove react-scripts', {
      cwd: this.APP_DIRECTORY,
      stdio: 'inherit'
    })
  }

  private custom() {
    console.log()
    console.log(chalk.bold(chalk.blue('Just setup')))
    console.log()

    console.log(chalk.red('- remove react-scripts'), '\n')

    this.removeReactScripts()

    console.log('\n', chalk.green('Success!'), '\n')
  }

  private create() {
    let cmd = 'create-react-app'
    let locate = ''

    try {
      locate = which.sync(cmd)
    } catch (err) {
      if (err.message.match('not found')) {
        console.error(
          chalk.red(
            `\nYou need install ${chalk.green(
              chalk.bold('create-react-app')
            )} before use this command.\n\n`
          )
        )

        console.log(
          `Run ${chalk.green(
            chalk.bold('npm install create-react-app -g')
          )} or ${chalk.bold(
            chalk.green('yarn global add create-react-app')
          )} to install.\n`
        )
      } else {
        console.log('\n', err, '\n')
      }

      process.exit()
    }

    const result = spawnSync(locate, [process.argv.slice().pop()!], {
      stdio: 'inherit',
      cwd: CWD
    })

    if (result.status && result.status !== 0) {
      process.exit(result.status)
    }

    this.custom()
  }
}
