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
    <Category title="游戏">
      <template scope="games">
        <ul>
          <li 
          v-for="(g,index) in games.games" 
          :key="index">
            {{g}}
          </li>
        </ul>
      </template>
      
    </Category>

    <Category title="游戏">
      <template scope="games">
        <ul>
            <ol>
              <li v-for="(g,index) in games.games" 
              :key="index">
                {{g}}
              </li>
            </ol>
        </ul>
      </template>
      
    </Category>

    <Category title="游戏">
      <template slot-scope="games">
            <h4 v-for="(g,index) in games.games" :key="index">{{g}}</h4>
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