<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-25 12:37:58
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-25 21:12:45
-->
<!--  -->
<template>
  <ul class="todo-main">
    <MyItem/>
    <MyItem/>
    <MyItem/>
  </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
    name:'MyList',
    data () {
        return {

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