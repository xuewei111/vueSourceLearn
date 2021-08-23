/*
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:27
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-23 12:54:22
 */
// 引入vue
import Vue from 'vue'
//引入App
import App from './App'
import {mixin,mixin2} from './mixin'
// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.mixin(mixin)
Vue.mixin(mixin2)


// 创建Vue
new Vue({
    render:h=>h(App)
}).$mount("#app")