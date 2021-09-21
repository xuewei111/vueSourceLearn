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
  <div class="container"> 
    <Category title="美食" :listData="foods">
      <img src="https://img.zcool.cn/community/01e8095bc75de9a8012099c887714a.jpg@1280w_1l_2o_100sh.jpg">
    </Category>
    <Category title="游戏">
      <ul>
          <li 
          v-for="(g,index) in games" 
          :key="index">
            {{g}}
          </li>
      </ul>
    </Category>
    <Category title="电影">
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name:'App',
  components:{
    Category
  },
  data(){
    return {
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['教父','菜单组件','你好']
    }
  }
}

</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }

  img {
        width: 100%;
  }

  video {
    width: 100%;
  }
</style>