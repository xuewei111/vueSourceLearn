<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-21 22:37:11
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-23 13:01:45
-->
<!--  -->
<template>
  <div>
      <h2>学生姓名: {{name}}</h2>
      <h2>学生性别: {{sex}}</h2>
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