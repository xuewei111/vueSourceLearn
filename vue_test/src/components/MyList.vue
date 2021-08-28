<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-25 12:37:58
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-28 17:35:10
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
    data () {
        return {
          todos:[
            {id:'001',title:'抽烟',done:true},
            {id:'002',title:'喝酒',done:false},
            {id:'003',title:'烫头',done:true}
          ]
        };
    },
    components:{
      MyItem
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