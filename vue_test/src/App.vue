<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:34
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-28 17:09:08
-->
<!--  -->
<template>
  <div id="root"> 
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader/>
        <MyList/>
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