<template>
    <h4>当前的求和为:{{sum}}</h4>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <h2>薪水:{{job.j1.salary}}</h2>
    <h2>汽车:{{person.car}}</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增长薪水</button>

    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给人添加一台车</button>
    <button @click="person.car.name+='!'">换车名</button>
    <button @click="changePrice">换价格</button>
</template>

<script>
import {reactive, ref,toRefs, toRaw, markRaw} from 'vue'
export default {
    name:'demo',
    setup(){
        // 数据
        let sum = ref(0)
        let person = reactive({ 
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        

        

        function showRawPerson(){
            let p = toRaw(person)
            console.log(p)
            // console.log(person)
        }

        function addCar(){
            let car = {
                name:'宝马',
                price:40
            }

            person.car = markRaw(car) 
            console.log(person.car)
        }

        function changePrice(){
            person.car.price++
            console.log(person.car.price)
        }

        // 返回一个对象(常用)
        return {
            sum,
            person,
            ...toRefs(person),
            showRawPerson,
            addCar,
            changePrice
        }
  },
}
</script>

<style>

</style>