<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-20 23:23:34
 * @LastEditors: xuewei
 * @LastEditTime: 2021-09-01 07:07:47
-->
<!--  -->
<template>
  <div id="root"> 
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo = "addTodo"/>
        <MyList :todos = "todos"/>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
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
        // 由于todos是MyHeader组件和MyFooter组件 都在使用,所以放在App中(状态提升)
        todos:JSON.parse(localStorage.getItem('todos')) || []
      };
  },
  methods: {
    // 添加一个todo
    addTodo(x){
      console.log('我是App组件,我收到了数据:',x)
      this.todos.unshift(x)
    },
    // 勾选 or 取消勾选 一个todo
    checkTodo(id){
      // this.todos.filter(x=>x.id===id)[0].done = !
      this.todos.forEach(x=>{
        if(x.id===id){
          x.done = !x.done
        }
      })
    },
    // 删除一个todo
    deleteTodo(id){
      this.todos = this.todos.filter(todo=> todo.id !== id)
    },
    //全选 or 取消全选
    checkAllTodo(done){
      this.todos.forEach(todo => {
        todo.done = done
      })
    },
    // 清除所有已经完成的todo
    clearAllTodo(){
      this.todos = this.todos.filter(todo=>{
        return !todo.done
      })
    }
  },
  watch:{
    // todos(value){
    //   localStorage.setItem('todos',JSON.stringify(value))
    // }
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  mounted(){
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('deleteTodo',this.deleteTodo)
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
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