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
// 引入插件
import vueResource from 'vue-resource'
// 引入store 
import store from './store'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(vueResource)




// 创建Vue
const vm = new Vue({
    render:h=>h(App),
    store,
    beforeCreate(){
      Vue.prototype.$bus = this  
    }
}).$mount("#app")

console.log(vm)