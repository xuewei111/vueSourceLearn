/*
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:27
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-23 13:05:58
 */
// 引入vue
import Vue from 'vue'
//引入App
import App from './App'
// 引入插件
import plugins from './plugins'
// 关闭Vue的生产提示
Vue.config.productionTip = false

//应用(使用)插件
Vue.use(plugins)
// 创建Vue
new Vue({
    render:h=>h(App)
}).$mount("#app")