<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-21 22:37:11
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-24 21:24:25
-->
<!--  -->
<template>
  <div class="demo">
      <h2 class="title">学生姓名: {{name}}</h2>
      <h2 class="qwe">学生性别: {{sex}}</h2>
  </div>
</template>

<script>
export default {
  name:'Student',
  data () {
    return {
        name:'张三',
        sex:17
    };
  },
}

</script>

<style lang="less">
  .demo {
    background-color: orange;
    .qwe{
      font-size: 40px;
    }
  }
</style>