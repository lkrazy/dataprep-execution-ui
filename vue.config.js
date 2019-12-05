const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  chainWebpack: (config) => {

    config.resolve.alias.set('@', path.resolve(__dirname, 'client/src'))

    config.plugin('html').tap((args) => {
      args[0].template = path.join(__dirname, './client/public/index.html')
      return args
    })

    config
      .entry('app')
      .clear()
      .add(path.join(__dirname, './client/src/main.js'))
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: path.join(__dirname, './client/public'),
        to: path.join(__dirname, './server/public'),
        toType: 'dir',
        ignore: ['index.html', '.DS_Store']
      }])
    ]
  },
  // indexPath: './client/public/index.html',
  outputDir: path.join(__dirname, './server/public'),
  productionSourceMap: false,
  filenameHashing: false,
};
