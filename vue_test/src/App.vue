<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:34
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-24 21:18:54
-->
<!--  -->
<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现: 子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据-->
    <Student @atguigu="getStudentName"/>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
  name:'App',
  components:{Student,School},
  data(){
    return {
      msg:'你好啊'
    }
  },
  methods: {
    getSchoolName(name){
      console.log('App收到了学校名: ',name)
    },
    getStudentName(name){
      console.log('App收到了学生名',name)
    }
  }
}

</script>
<style scoped>
  .app {
    background-color: gray;
  }
</style>