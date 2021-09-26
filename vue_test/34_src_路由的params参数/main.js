/*
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:27
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-24 20:54:05
 */
// 引入vue
import Vue from 'vue'
//引入App
import App from './App'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)





// 创建Vue
const vm = new Vue({
    render:h=>h(App),
    router
}).$mount("#app")

console.log(vm)

