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
// 完整引入
// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
// import {Button,Row,DatePicker} from 'element-ui'
//引入App
import App from './App'

// 应用ElementUI
Vue.use(ElementUI);

// 关闭Vue的生产提示
Vue.config.productionTip = false
// Vue.use(Button)
// Vue.use(Row)
// Vue.use(DatePicker)





// 创建Vue
const vm = new Vue({
    render:h=>h(App),
}).$mount("#app")

console.log(vm)

