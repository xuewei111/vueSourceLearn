<!--
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-21 22:37:11
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-22 13:13:11
-->
<!--  -->
<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名: {{name}}</h2>
      <h2>学生性别: {{sex}}</h2>
      <h2>学生年龄: {{myAge+1}}</h2>

      <button @click="update">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data () {
    return {
        msg:'一个叫张三的人',
        myAge:this.age
    };
  },
  // 简单声明接收
  // props:['name','age','sex'] 
  // 接收的同时对数据进行类型限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }
  // 接收的同时对数据:进行类型限制+默认值的指定+必要值的限制
  props:{
    name:{
      type:String, //name的类型是字符串
      required:true // name是必须的
    },
    age:{
      type:Number,
      default:99 // 默认值
    },
    sex:{
      type:String,
      required:true
    }
  },
  methods:{
    update(){
      this.myAge++
    }
  }
}

</script>