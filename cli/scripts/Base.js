"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const fs_1 = require("fs");
class Base {
    init() {
        // patch
        const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
        require.cache[require.resolve('react-dev-utils/checkRequiredFiles')] = {
            exports() {
                if (!fs_1.existsSync(Config_1.resolve(Config_1.APP_DIRECTORY, 'public'))) {
                    require('react-scripts/config/paths').appPublic =
                        Config_1.justConfig.public || Config_1.resolveRoot('public');
                    require('react-scripts/config/paths').appHtml = Config_1.justConfig.public
                        ? Config_1.resolve(Config_1.justConfig.public, 'index.html')
                        : Config_1.resolveRoot('public/index.html');
                }
                return checkRequiredFiles(...arguments);
            }
        };
        // console.log(
        //   require('react-scripts/config/paths').appHtml,
        //   require('react-scripts/config/paths').appPublic
        // )
        require('react-app-rewired/scripts/utils/paths').configOverrides = Config_1.resolveRoot('cli/react-rewired.js');
    }
}
exports.Base = Base;
