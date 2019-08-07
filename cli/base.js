"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class Base {
    init() {
        require('react-app-rewired/scripts/utils/paths').configOverrides = path_1.resolve(__dirname, '..', 'react-rewired.js');
    }
}
exports.Base = Base;
