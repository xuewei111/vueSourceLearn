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
// 关闭Vue的生产提示
Vue.config.productionTip = false

// const Demo = Vue.extend({})
// const d = new Demo()

// Vue.prototype.x = d
// Vue.prototype.x = {a:1,b:2}

// 创建Vue
new Vue({
    render:h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus = this // 安装全局事件总线
    }
}).$mount("#app")