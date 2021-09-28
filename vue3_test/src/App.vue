<template>
  <h1>我是App组件</h1>

  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>性别:{{sex}}</h2>
  <h2>a的值是{{a}}</h2>

  <button @click="sayHello">说话vue3所配置的----sayHello)</button>
  <br>
  <button @click="sayWelcome">说话(vue2所配置的----sayWelcome)</button>
  <hr>
  <button @click="test1">测试一下在vue2的配置中去读取vue3中的配置</button>
  <br>
  <button @click="test2">测试一下在vue3的配置中去读取vue2中的配置</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  data(){
    return {
      sex:'男',
      a:100
    }
  },
  methods:{
    sayWelcome(){
      alert('学习！吃饭！')
    },
    test1(){
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
      // this.sayHello()
    }
  },
  // 此处只是测试一下setup，暂时不考虑响应式的问题
  setup(){
    // 数据
    let name = '张三'
    let age = 18
    let a = 200

    // 方法
    function sayHello(){
      alert(`我叫${name},我${age}岁了,你好啊！`)
    }

    function test2(){
      console.log(this.sex)
      console.log(name)
      console.log(age)

      this.sayWelcome()
    }

    // 返回一个对象(常用)
    return {
      name,
      age,
      sayHello,
      test2,
      a
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
