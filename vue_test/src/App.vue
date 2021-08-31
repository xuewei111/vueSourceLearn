<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:34
 * @LastEditors: xuewei
 * @LastEditTime: 2021-09-01 06:39:06
-->
<!--  -->
<template>
  <div id="root"> 
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo = "addTodo"/>
        <MyList :todos = "todos"/>
        <MyFooter/>
      </div>
    </div>
    
  </div>
</template>

<script>
// 引入School组件
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'

export default {
  name:'App',
  components:{
    MyHeader,
    MyList,
    MyFooter
  },
  data () {
      return {
        todos:[
          {id:'001',title:'抽烟',done:true},
          {id:'002',title:'喝酒',done:false},
          {id:'003',title:'烫头',done:true}
        ]
      };
  },
  methods: {
    addTodo(x){
      console.log('我是App组件,我收到了数据:',x)
      this.todos.unshift(x)
    }
  }
}

</script>
<style>
  /** base */
  body {
    background: #fff;
  }
  
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd352f
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd352f;
  }

  .btn:focus {
    outline: none;
  }
  
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }




</style>