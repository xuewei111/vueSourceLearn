<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {customRef, ref} from 'vue'
export default {
  name: 'App',
  setup(){
    // 自定义一个ref----myRef
    function myRef(value){
      let timer
      return customRef((track,trigger)=>{
        return {
          get(){
            console.log(`有人从myRef这个容器中读取数据了,我把${value}给他了`)
            track() //通知Vue追踪value的变化(提前和get商量一下,让他认为这个value是有用的)
            return value
          },
          set(val){
            console.log(`有人把myRef这个容器中数据修改为:${val}`)
            // keyWord.value = val
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = val
              trigger() //通知Vue去重新解析模板
            },500)
          }
        }
      })
    }
    // let keyWord = ref('hello') // 使用Vue提供的ref
    let keyWord = myRef('hello') //使用自定义的ref
    return {
      keyWord
    }
  }
}
</script>

