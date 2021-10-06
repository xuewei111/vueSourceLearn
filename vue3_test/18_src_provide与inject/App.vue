<template>
    <div class="app">
      <h3>我是App组件(祖),{{name}}----{{price}}</h3>
      <Child/>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import Child from './components/Child.vue'
import { provide } from '@vue/runtime-core'
export default {
  name:'App',
  components:{
    Child
  },
  setup(){
    let car = reactive({
      name:'宝马',
      price:'40'
    })

    provide('car',car) //给自己的后代组件传递数据

    return {...toRefs(car)}
  }
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>