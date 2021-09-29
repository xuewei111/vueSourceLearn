<template>
  <h1>我是App组件</h1>

  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>

  <h3>工作种类:{{person.job.type}}</h3>
  <h3>工作薪水:{{person.job.salary}}</h3>
  <h3>测试的数据c{{person.job.a.b.c}}</h3>
  <h3>爱好:{{person.hobby}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    // 数据

    let person = reactive({
      name:'张三',
      age:18,
      job:{
        type:'前端',
        salary:'30K',
        a:{
          b:{
            c:666
          }
        }
      },
      hobby:['抽烟','喝酒','烫头']
    })
    // let num = reactive(666)

    // 方法
    function changeInfo(){
      // name.value = '李四',
      // age.value = 40
      // job.type = 'UI设计'
      // job.salary = '60k'

      // job.a.b.c = 999

      // console.log(job)

      // console.log(name,age)
      // hobby[0] = '学习'
      person.name = '李四'
      person.age = 48
      person.job.type = 'UI设计'
      person.job.salary = '60k'
      person.job.a.b.c = 999
      person.hobby[0] = '学习'
    }

    // 返回一个对象(常用)
    return {
      person,
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
