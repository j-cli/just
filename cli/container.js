"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = require("func");
const Start_1 = require("./scripts/Start");
const Build_1 = require("./scripts/Build");
const Create_1 = require("./scripts/Create");
new func_1.Container([Start_1.Start, Build_1.Build, Create_1.Create]);
