import { Container } from 'func'
import { Start } from './scripts/Start'
import { Build } from './scripts/Build'
import { Create } from './scripts/Create'

new Container([Start, Build, Create])
