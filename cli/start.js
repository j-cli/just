"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = require("func");
const Base_1 = require("./Base");
let Start = class Start extends Base_1.Base {
    constructor() {
        super();
        this.start();
    }
    start() {
        this.init();
        require('react-app-rewired/scripts/start');
    }
};
Start = __decorate([
    func_1.CommandMajor(),
    func_1.Command({ name: 'start' })
], Start);
exports.Start = Start;
