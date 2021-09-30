<template>
    <h2>当前求和为:{{sum}}</h2>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>当前的信息为:{{msg}}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <h2>薪水:{{person.job.j1.salary}}</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">增长薪水</button>
</template>

<script>
import {reactive, ref,watch} from 'vue'
export default {
    name:'demo',
    // watch:{
    //     sum(newValue,oldValue){
    //         console.log('sum值变化了!',newValue,oldValue)
    //     }
    //     sum:{
    //         immediate:true, //立即执行
    //         deep:true, // 深度监听
    //         handler(newValue,oldValue){
    //             console.log('sum值变化了!',newValue,oldValue)
    //         }
    //     }
    // },
    setup(){
        // 数据
        let sum = ref(0)

        let msg = ref('你好啊')

        let person = reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        // 情况一L监视ref所定义的一个响应式数据
        // watch(sum,(newValue,oldValue)=>{
        //     console.log('sum变了',newValue,oldValue)
        // },{immediate:true})

        // 情况二:监视ref所定义的多个响应式数据
        // watch([sum,msg],(newValue,oldValue)=>{
        //     console.log('sum或msg变化了',newValue,oldValue)
        // },{immediate:true})

        // 情况三:监视reactive所定义的一个响应式数据，
        // 1.注意:此处无法正确的获取oldValue
        // 2.强制开启了深度监视(deep配置无效)
        // watch(person,(newValue,oldValue)=>{
        //     console.log('person修改了！',newValue,oldValue)
        // },{deep:false}) 此处的deep配置无效

        // 情况四：监视reactive所定义的一个响应式数据中的某个属性
        // watch(()=>person.name,(newValue,oldValue)=>{
        //     console.log('person的name变化了',newValue,oldValue)
        // })

        //情况五：监视reactive所定义的一个响应式数据中的某些属性
            // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
            //     console.log('person的name或age变化了',newValue,oldValue)
            // })

        // 特殊情况
        // watch(()=>person.job,(newValue,oldValue)=>{
        //     console.log('person.job变化了',newValue,oldValue)
        // },{deep:true}) // 此处由于监视的是reactive所定义的对象中的某个属性,所以depp配置有效

        // 返回一个对象(常用)
        return {
            sum,
            msg,
            person
        }
  },
}
</script>

<style>

</style>