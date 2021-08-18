<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-18 12:54:00
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-18 13:02:50
-->
<template>
    <!--
        // 组件的结构
    -->
    <div>
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showName">点击</button>
    </div>
</template>

<script>
    // 组件交互相关的代码(数据,方法等等)
    // 定义school组件


    export default{
        name:'School',
        data(){
            return {
                name:'尚硅谷',
                address:'北京'
            }
        },
        methods: {
            showName(){
                // console.log(this.x)
            }
        },
    }
</script>

<style lang="">
    /*组件的样式 */
    .demo{
        background-color: orange;
    }
</style>