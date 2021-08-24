<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:34
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-23 12:42:28
-->
<!--  -->
<template>
  <div>
    <Student/>
    <School/>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
  name:'App',
  components:{Student,School}
}

</script>
<style>
</style>