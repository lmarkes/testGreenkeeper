var webpack = require('webpack');
var path = require('path');

var WebpackNotifierPlugin = require('webpack-notifier');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

// Setup .env variables to be used in DefinePlugin
var dotEnvVars = require('dotenv').config();

var config = {
    module: {
        loaders: [
            { test: /\.js?/,include: APP_DIR,loader: 'babel' }
        ]
    },
    entry: APP_DIR + '/app.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new WebpackNotifierPlugin({alwaysNotify: true}),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'CORE_URL': JSON.stringify(dotEnvVars.CORE_URL)
            }
        })
    ]
};

module.exports = config;

