/*
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-19 12:57:39
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-19 13:00:41
 */
module.exports = {
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
      },
    },
    lintOnSave:false, //关闭语法检查
    // 开启代理服务器(方式一)
    // devServer: {
    //   proxy: 'http://localhost:5000'
    // }

    // 开启代理服务器(方式一)
    devServer: {
      proxy: {
        '/atguigu': {
          target: 'http://localhost:5000',
          pathRewrite:{'^/atguigu':''},
          ws: true, //用于websccket
          changeOrigin: true
        },
        '/demo': {
          target: 'http://localhost:5001',
          pathRewrite:{'^/demo':''},
          ws: true, //用于websccket
          changeOrigin: true
        }
      }
    }
  }