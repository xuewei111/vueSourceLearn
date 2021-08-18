<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-18 13:06:05
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-18 13:17:09
-->
<template>
  <div>
      <School/>
      <Syudent/>
  </div>
</template>

<script>
    // 引入组件
    import School from './School.vue'
    import Student from './Student.vue'

    export default {
        name:'App',
        components:{
            School,
            Student
        },
        template:`
            <App></App>
        `
    }
</script>