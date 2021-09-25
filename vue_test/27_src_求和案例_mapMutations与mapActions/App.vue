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
  <div> 
    <Count/>
    <hr/>
    <Person/>
  </div>
</template>

<script>
import Count from './components/Count'
import Person from './components/Person.vue'
export default {
  name:'App',
  components:{
    Count,
    Person
  },
  // mounted(){
  //   console.log('App',this)
  // }
}

</script>

<style>
</style>