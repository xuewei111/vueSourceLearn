<template>
    <h4>当前的x值是:{{x.y}}</h4>
    <button @click="x.y++">x.y++</button>
    <hr>
    <h4>{{person}}</h4>
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <h2>薪水:{{job.j1.salary}}</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增长薪水</button>
</template>

<script>
import {reactive, ref, toRef,toRefs,shallowReactive,shallowRef} from 'vue'
export default {
    name:'demo',
    setup(){
        // 数据
        // let person = shallowReactive({  // 只考虑第一层数据的响应式
        let person = reactive({ 
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        let x = shallowRef({
            y:0
        })

        const name1 = person.name 
        console.log('%%%',name1)

        const name2 = toRef(person,'name')
        console.log('###',name2)
        // 返回一个对象(常用)
        return {
            x,
            person,
            ...toRefs(person)
        }
  },
}
</script>

<style>

</style>