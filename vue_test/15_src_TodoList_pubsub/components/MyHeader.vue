<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-25 12:37:58
 * @LastEditors: xuewei
 * @LastEditTime: 2021-09-01 06:45:41
-->
<!--  -->
<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称,按回车确认" @keyup.enter="add" v-model="title">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    // props:['addTodo'],
    data(){
      return {
        title:''
      }
    },
    methods:{
      add(){
        if(!this.title.trim()) return alert('不能为空')
        // 将用户的输入包装成一个todo对象
        // console.log(e.target.value)
        const todo = {
          id:nanoid(),
          title:this.title,
          done:false
        }
        // console.log(todo)
        // 通知App组件去添加一个todo对象
        this.$emit('addTodo',todo)
        // this.addTodo(todo)
        // 清空输入
        this.title = ''
      }

    }

}

</script>
<style scoped>
  /** header */
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus{
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,23,0);
  }
</style>