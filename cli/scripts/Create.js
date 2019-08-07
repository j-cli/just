"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = require("func");
const Base_1 = require("./Base");
const which_1 = __importDefault(require("which"));
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
const Config_1 = require("./Config");
let Create = class Create extends Base_1.Base {
    constructor() {
        super();
        this.APP_DIRECTORY = Config_1.resolve(Config_1.APP_DIRECTORY, process.argv.slice().pop());
        this.create();
    }
    removeReactScripts() {
        child_process_1.execSync('yarn remove react-scripts', {
            cwd: this.APP_DIRECTORY,
            stdio: 'inherit'
        });
    }
    custom() {
        console.log();
        console.log(chalk_1.default.bold(chalk_1.default.blue('Just setup')));
        console.log();
        console.log(chalk_1.default.red('- remove react-scripts'), '\n');
        this.removeReactScripts();
        console.log('\n', chalk_1.default.green('Success!'), '\n');
    }
    create() {
        let cmd = 'create-react-app';
        let locate = '';
        try {
            locate = which_1.default.sync(cmd);
        }
        catch (err) {
            if (err.message.match('not found')) {
                console.error(chalk_1.default.red(`\nYou need install ${chalk_1.default.green(chalk_1.default.bold('create-react-app'))} before use this command.\n\n`));
                console.log(`Run ${chalk_1.default.green(chalk_1.default.bold('npm install create-react-app -g'))} or ${chalk_1.default.bold(chalk_1.default.green('yarn global add create-react-app'))} to install.\n`);
            }
            else {
                console.log('\n', err, '\n');
            }
            process.exit();
        }
        const result = child_process_1.spawnSync(locate, [process.argv.slice().pop()], {
            stdio: 'inherit',
            cwd: Config_1.APP_DIRECTORY
        });
        if (result.status && result.status !== 0) {
            process.exit(result.status);
        }
        this.custom();
    }
};
Create = __decorate([
    func_1.Command({ name: 'create' })
], Create);
exports.Create = Create;
