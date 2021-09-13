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
  <div class="student">
      <h2>学生姓名: {{name}}</h2>
      <h2>学生性别: {{sex}}</h2>
      <h2>{{number}}</h2>
      <button @click="add">点我number++</button>
      <button @click="sendStudentName">把学生名给App</button>
      <button @click="unbind">解绑atguigu事件</button>
      <button @click="death">销毁当前Student组件的实例(VC)</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data () {
    return {
        name:'张三',
        sex:'男',
        number:0
    };
  },
  methods:{
    add(){
      console.log('add回调呗调用了！')
      this.number++
    },
    sendStudentName(){
      // 触发Student组件实例身上的atguigu事件
      this.$emit('atguigu',this.name)
      // this.$emit('click')
    },
    unbind(){
      // this.$off('atguigu') //解绑一个自定义事件
      // this.$off(['atguigu','demo']) //解绑多个自定义事件
      this.$off() //解绑所有的自定义事件
    },
    death(){
      this.$destroy() //销毁了当前的Student组件的实例,销毁后所有Student实例的自定义事件全都不奏效了
    }
  }
}

</script>

<style scoped>
  .student {
    background-color: pink;
    padding: 5px;
  }
</style>