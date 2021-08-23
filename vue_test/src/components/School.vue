<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-21 22:37:11
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-23 12:59:41
-->
<!--  -->
<template>
  <div>
      <h2 @click="showName">学校名字: {{name}}</h2>
      <h2>学校地址: {{address}}</h2>
  </div>
</template>

<script>
// 引入一个混合
// import {mixin} from '../mixin'
export default {
  name:'Student',
  data () {
    return {
        name:'blibli',
        address:'无锡'
    };
  },
  // mixins:[mixin]
}

</script>