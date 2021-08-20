/*
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-18 18:09:37
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-19 12:53:32
 */

/**
 * 该文件是整个项目的入口文件
 */
//引入Vue
import Vue from 'vue'
// 引入App组件,它是所有组件的父组件
// import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

/**
 * 关于不同版本的Vue
 *  1.vue.js于vue.runtime.xxx.js的区别
 *      1.vue.js是完整版的Vue,包含:核心功能+模板解析器
 *      2.vue.runtime.xxx.js是运行版的Vue,只包含:核心功能,没有模板解析器
 * 
 *  2.因为Vue.runtime.xxx.js没有模板解析器,所以不能使用template配置项,需要使用render函数
 *    接收到的createElement函数去指定具体内容
 */
// 创建Vue实例对象----vm
// new Vue({
//   el:'#app',
//   render: h => h(App),
// })

new Vue({
  el:'#app',
  //   render: h => h(App),
  render(createElement){
    return createElement('h1','你好')
  }
})
