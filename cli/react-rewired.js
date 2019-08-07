"use strict";
const Config_1 = require("./scripts/Config");
const merge = require('webpack-merge');
module.exports = function override(config, env) {
    // assign webpack
    if (typeof Config_1.justConfig.webpack === 'object') {
        config = merge(config, Config_1.justConfig.webpack);
    }
    else if (typeof Config_1.justConfig.webpack === 'function') {
        config = Config_1.justConfig.webpack(Config_1.APP_DIRECTORY, config, env);
    }
    if (Config_1.justConfig.hot) {
        const rewireReactHotLoader = require('react-app-rewire-hot-loader');
        config = rewireReactHotLoader(config, env);
    }
    // HtmlWebpackPlugin inject
    config.plugins[0].options.title = Config_1.justConfig.title || 'Create React App';
    return config;
};
