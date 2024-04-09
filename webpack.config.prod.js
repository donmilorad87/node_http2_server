const path = require('path')


const TerserPlugin = require("terser-webpack-plugin");


module.exports = {

    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, './src/app.js'),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ],
    }
}
