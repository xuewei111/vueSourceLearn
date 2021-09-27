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
    <div class="row">
      <div>
        <Banner/>
      </div>
    </div>

    <div class="row">
      <div>
        <div>
          <!--原始html中我们使用a标签实现页面的跳转-->
          <!-- <a href="./about.html">About</a>
          <a href="./home.html">About</a> -->

          <!--Vue中借助router-link标签实现路由的切换-->
          <router-link replace to="/about">About</router-link>
          <router-link replace to="/home">Home</router-link>
        </div>
      </div>

      <div>
        <div>
          <div>
            <!--指定组件的呈现位置-->
            <!-- <h2>222</h2> -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name:'App',
  components:{Banner}
}

</script>

<style>
</style>