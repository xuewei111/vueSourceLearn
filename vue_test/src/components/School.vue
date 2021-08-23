<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-21 22:37:11
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-23 13:05:20
-->
<!--  -->
<template>
  <div>
      <h2>学校名字: {{name}}</h2>
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