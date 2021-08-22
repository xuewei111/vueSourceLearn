<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:34
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-22 12:53:34
-->
<!--  -->
<template>
  <div>
    <Student name="李四" sex="女" :age="18"/>
    <Student name="王老五" sex="男" :age="19"/>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
export default {
  name:'App',
  components:{Student}
}

</script>
<style>
</style>