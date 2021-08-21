<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:34
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-21 23:43:11
-->
<!--  -->
<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出上方的Dom元素</button>
    <school ref="sch"/>
  </div>
</template>

<script>
// 引入School组件
import School from './components/School.vue'
export default {
  name:'App',
  components:{School},
  data(){
    return {
      msg:"你好啊"
    }
  },
  methods:{
    showDom(){
      console.log(this.$refs.title) //真实DOM元素
      console.log(this.$refs.btn) //真实的DOM元素
      console.log(this.$refs.sch)  //School组件的实例对象(VC)
    }
  }
}

</script>
<style>
</style>