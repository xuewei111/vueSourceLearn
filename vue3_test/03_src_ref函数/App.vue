<template>
  <h1>我是App组件</h1>

  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>

  <h3>工作种类:{{job.type}}</h3>
  <h3>工作薪水:{{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    // 数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type:'前端',
      salary:'30K'
    })

    // 方法
    function changeInfo(){
      // name.value = '李四',
      // age.value = 40
      job.value.type = 'UI设计'
      job.value.salary = '60k'

      // console.log(name,age)
    }

    // 返回一个对象(常用)
    return {
      name,
      age,
      job,
      changeInfo
    }

    // 返回一个函数(渲染函数)
    // return ()=>h('h1','尚硅谷')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
