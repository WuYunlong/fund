/* eslint-disable */
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  pages: {
    index: {
      entry: 'src/renderer/index.ts'
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: false,
      preload: 'src/main/preload.ts',
      chainWebpackMainProcess: config => {
        config.resolve.alias.set('@', resolve('src'))
      },
      mainProcessFile: 'src/main/index.ts',
      mainProcessWatch: ['src/main/**']
    }
  }
}
