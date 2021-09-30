<template>
    <h1>一个人的信息</h1>

    <h2 v-show="person.name">姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>

    <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
    name:'demo',
    // beforeCreate(){
    //     console.log('--------beforeCreate------')
    // },
    props:['msg','school'],
    emits:['hello'],
    setup(props,context){
        // console.log('--------setup------',this,props)
        // console.log('--------setup------',context.attrs) // 相当于vue2中的$attrs
        // console.log('--------setup------',context.emit)   // 触发自定义事件的
        // console.log('--------setup------',context.slots)  // 插槽
        // 数据

        let person = reactive({
            name:'张三',
            age:18
        })

        

        // 方法
        function test(){
            context.emit('hello',666)
        }
        // 返回一个对象(常用)
        return {
            test,
            person
        }
  },
}
</script>

<style>

</style>