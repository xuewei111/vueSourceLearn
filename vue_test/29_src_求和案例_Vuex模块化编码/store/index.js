// g该文件用于创建Vuex中最为核心的stroe

// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)

import countOptions from './count'
import personOptions from './person'

// 创建store and 导出
export default new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})

