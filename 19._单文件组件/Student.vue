<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-18 13:03:45
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-18 13:05:36
-->
<!--  -->
<template>
  <div>
    <h2>学生姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data () {
        return {
            name:'张大',
            age:18 
        };
    },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>

</style>