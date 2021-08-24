<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-21 22:37:11
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-24 20:47:12
-->
<!--  -->
<template>
  <div>
      <h2>学校名字: {{name | mySlice}}</h2>
      <h2>学校地址: {{address}}</h2>
      <input type="text" v-fbind:value="name">

      <!-- <button @click="test">点我触发hello</button> -->
      <button @click="dello">点我触发hello</button>

  </div>
</template>

<script>
export default {
  name:'Student',
  data () {
    return {
        name:'blibli啊啊啊啊啊',
        address:'无锡'
    };
  },
  methods: {
    // test(){
    //   this.dello()
    // }
  },
}

</script>