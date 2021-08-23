<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-21 22:37:11
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-23 12:53:13
-->
<!--  -->
<template>
  <div>
      <h2 @click="showName">学生姓名: {{name}}</h2>
      <h2>学生性别: {{sex}}</h2>
  </div>
</template>

<script>
// 引入一个混合
// import {mixin,mixin2} from '../mixin'
export default {
  name:'Student',
  data () {
    return {
        name:'张三',
        sex:17
    };
  },
  // mixins:[mixin,mixin2],
  mounted() {
    console.log('代码中的你号')
  },
}

</script>