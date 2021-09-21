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
      <img src="https://img.zcool.cn/community/01e8095bc75de9a8012099c887714a.jpg@1280w_1l_2o_100sh.jpg" slot="center">
      <a href="www.baidu.com" slot="footer">更多的美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
          <li 
          v-for="(g,index) in games" 
          :key="index">
            {{g}}
          </li>
      </ul>
      <div slot="footer" class="foot">
        <a href="www.baidu.com">单机游戏</a>
        <a href="www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls slot="center"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="www.baidu.com">经典</a>
          <a href="www.baidu.com">热门</a>
          <a href="www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
      
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
  .container,.foot {
    display: flex;
    justify-content: space-around;
  }

  img {
        width: 100%;
        height: 100%;
  }

  video {
    width: 100%;
  }
  
  h4 {
    text-align: center;
  }
</style>