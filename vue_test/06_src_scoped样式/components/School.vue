<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-21 22:37:11
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-24 21:19:06
-->
<!--  -->
<template>
  <div class="demo">
      <h2 class="title">学校名字: {{name}}</h2>
      <h2>学校地址: {{address}}</h2>

  </div>
</template>

<script>
export default {
  name:'Student',
  data () {
    return {
        name:'blibli',
        address:'无锡'
    };
  },
}

</script>

<style scoped>
  .demo {
    background-color: aqua;
  }
</style>