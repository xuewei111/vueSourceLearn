/*
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:27
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-20 23:26:29
 */
// 引入vue
import Vue from 'vue'
//引入App
import App from './App'
// 关闭Vue的生产提示
Vue.config.productionTip = false


// 创建Vue
new Vue({
    render:h=>h(App)
}).$mount("#app")