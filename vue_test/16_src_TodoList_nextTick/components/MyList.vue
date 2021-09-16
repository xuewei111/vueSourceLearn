<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-25 12:37:58
 * @LastEditors: xuewei
 * @LastEditTime: 2021-09-01 07:02:56
-->
<!--  -->
<template>
  <ul class="todo-main">
    <MyItem v-for="todo in todos"
    :key="todo.id"
    :todo="todo"
    />
  </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
    name:'MyList',
    components:{
      MyItem
    },
    props:{
      todos:Array,
    }

}

</script>
<style scoped>
  /** main */
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>