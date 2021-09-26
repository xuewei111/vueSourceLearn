<template>
  <ul>
      <li>
          消息编号:{{id}}
      </li>
      <li>
          消息编号:{{title}}
      </li>
  </ul>
</template>

<script>
export default {
    name:'Detail',
    props:['id','title'],
    computed:{
        // id(){
        //     return this.$route.params.id
        // },
        // title(){
        //     return this.$route.params.title
        // }
    },
    mounted(){

    }
}
</script>

<style>

</style>