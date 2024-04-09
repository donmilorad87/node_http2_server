const path = require('path')

const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {

  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, './src/server.js'),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.js',
    clean: true
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
}
