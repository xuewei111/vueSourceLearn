<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-21 22:37:11
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-24 21:19:06
-->
<!--  -->
<template>
  <div class="school">
      <h2>学校名字: {{name}}</h2>
      <h2>学校地址: {{address}}</h2>
  </div>
</template>

<script>
export default {
  name:'School',
  data () {
    return {
        name:'blibli',
        address:'无锡'
    };
  },
  mounted(){
    // console.log('School',this.x)
    this.$bus.$on('hello',(data)=>{
      console.log('我是Schoo组件,收到了数据',data)
    })
  },
  beforeDestroy(){
    this.$bus.$off('hello')
  }
}

</script>

<style scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
  }
</style>