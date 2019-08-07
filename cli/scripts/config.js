"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.resolve = path_1.resolve;
const os_1 = require("os");
exports.APP_DIRECTORY = fs_1.realpathSync(process.cwd());
exports.justConfigPath = path_1.resolve(exports.APP_DIRECTORY, 'just.config.js');
exports.justConfigGlobalPath = path_1.resolve(os_1.homedir(), 'just.config.js');
exports.resolveRoot = (dir) => path_1.resolve(__dirname, '..', '..', dir);
let justConfig = { hot: false };
exports.justConfig = justConfig;
if (fs_1.existsSync(exports.justConfigPath)) {
    Object.assign(justConfig, require(exports.justConfigPath));
}
if (fs_1.existsSync(exports.justConfigGlobalPath)) {
    Object.assign(justConfig, require(exports.justConfigGlobalPath));
}
