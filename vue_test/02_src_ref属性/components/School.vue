<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-21 22:37:11
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-21 22:49:05
-->
<!--  -->
<template>
  <div class="school">
      <h2>
          学校名称:{{name}}
      </h2>
      <h2>
          学校地址:{{address}}
      </h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
        name:'xuewei',
        address:'bilbil'
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style>
    .school {
        background-color: gray;
    }
</style>