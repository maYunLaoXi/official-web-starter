const path = require('path');

module.exports = {
  dev: {
    port: 3000,
    autoOpenBrower: false,
    host: '0.0.0.0',
    overlay: { warnings: false, errors: true },
    openPage: 'home.html',
    publicPath: '/',
    proxy: {
      '/': {
        target:"http://111.231.86.179:8295/",
        changeOrigin: true,
        pathRewrite: {
          '^/': '/'
        },
      }
    }
  },
  build: {
    //表示输出到dist目录
    path: path.resolve(__dirname, '../../','./dist'),
    //如果是目录大于二级,必须设置'/'
    publicPath: '/'
  }
}