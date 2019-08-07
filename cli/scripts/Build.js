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
let Build = class Build extends Base_1.Base {
    constructor() {
        super();
        this.build();
    }
    build() {
        this.init();
        require('react-app-rewired/scripts/build');
    }
};
Build = __decorate([
    func_1.Command({ name: 'build' })
], Build);
exports.Build = Build;
