<template>
    <h4>当前的求和为:{{sum}}</h4>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <h2>薪水:{{job.j1.salary}}</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增长薪水</button>
</template>

<script>
import {reactive, ref,toRefs,readonly,shallowReadonly} from 'vue'
export default {
    name:'demo',
    setup(){
        // 数据
        let person = reactive({ 
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        // person = readonly(person)
        // person = shallowReadonly(person)
        

        let sum = ref(0)

        // sum = readonly(sum)
        // sum = shallowReadonly(sum)

        // 返回一个对象(常用)
        return {
            sum,
            ...toRefs(person)
        }
  },
}
</script>

<style>

</style>