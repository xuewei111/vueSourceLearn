<template>
  <div>
      <h1>当前求和为:{{sum}}</h1>
      <select v-model="n">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
      </select>
      <button @click="inCrement">+</button>
      <button @click="deCrement">-</button>
      <button @click="inCrementOdd">当前求和为奇数再加</button>
      <button @click="inCrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
    name:'Count',
    data(){
        return {
            sum:0, // 当前的和
            n:1 //用户选择的数字
        }
    },
    methods:{
        inCrement(){
            this.sum += this.n
        },
        deCrement(){
            this.sum -= this.n
        },
        inCrementOdd(){
            if(this.sum % 2){
                this.sum += this.n
            }
        },
        inCrementWait(){
            setTimeout(()=>{
                this.sum += this.n
            },500)
        },
    },
    mounted(){
        console.log('Count',this)
    }
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>