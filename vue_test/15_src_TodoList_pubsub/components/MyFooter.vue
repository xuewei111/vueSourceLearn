<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-25 12:37:58
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-25 21:21:53
-->
<!--  -->
<template>
  <div class="todo-footer" v-show="todal">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      <span>已完成 {{doneTotal}}</span> /全部 {{todal}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:{
      todos:Array,
      // checkAllTodo:Function,
      // clearAllTodo:Function
    },
    computed:{
      todal(){
        return this.todos.length
      },
      doneTotal(){
        return this.todos.reduce((pre,todo)=> pre + (todo.done?1:0),0)
      },
      isAll:{
        get(){
          return this.doneTotal === this.todal && this.todal > 0
        },
        set(val){
          this.$emit('checkAllTodo',val)
          // this.checkAllTodo(val)
        }
      }
    },
    data () {
        return {

        };
    },
    methods: {
      // checkAll(e){
      //   console.log(e.target.checked)
      //   this.checkAllTodo(e.target.checked)
      // }
      clearAll(){
        // this.clearAllTodo()
        this.$emit('clearAllTodo')
      }
    }

}

</script>
<style scoped>
  /** footer */
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>