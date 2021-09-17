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
    <Test/>
    <Test2/>
    <Test3/>
  </div>
</template>

<script>


import Test from './components/test'
import Test2 from './components/test2'
import Test3 from './components/test3'

export default {
  name:'App',
  components:{
    Test,
    Test2
  },
}

</script>