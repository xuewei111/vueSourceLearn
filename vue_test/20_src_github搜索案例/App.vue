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
  <div class="comtainer"> 
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'
export default {
  name:'App',
  components:{
    Search,
    List
  }
}

</script>