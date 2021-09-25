<template>
  <div>
      <h1>当前求和为:{{sum}}</h1>
      <h3>当前求和放大10倍后为:{{$store.getters.bigSum}}</h3>
      <h3>我在{{school}},学习{{subject}}</h3>
      <select v-model="n">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
      </select>
      <button @click="inCrement(n)">+</button>
      <button @click="deCrement(n)">-</button>
      <button @click="inCrementOdd(n)">当前求和为奇数再加</button>
      <button @click="inCrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Count',
    data(){
        return {
            n:1 //用户选择的数字
        }
    },
    computed:{

        // 借助mapState生成计算属性,从state中读取数据.(对象写法)
        // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

        // 借助mapState生成计算属性,从state中读取数据(数组写法)
        ...mapState(['sum','school','subject']),
        

        /************ */
        // 借助mapGetters生成计算属性,从getters中读取数据.(对象写法)
        // ...mapGetters({bigSum:'bigSum'})
        // 借助mapGetters生成计算属性,从getters中读取数据(数组写法)
        ...mapGetters(['bigSum'])
    },
    methods:{
        // 程序员亲自写方法
        // inCrement(){
        //     this.$store.commit('JIA',this.n)
        // },
        // deCrement(){
        //     this.$store.commit('JIAN',this.n)
        // },

        // 借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(对象写法)
        ...mapMutations({inCrement:'JIA',deCrement:'JIAN'}),

        // 借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(数组写法)
        // ...mapMutations(['JIA','JIAN']),
        /********************** */
        // inCrementOdd(){
        //     // if(this.$store.state.sum % 2){
        //     //     this.$store.dispatch('jiaOdd',this.n)
        //     // }
        //     this.$store.dispatch('jiaOdd',this.n)
        // },
        // inCrementWait(){
        //     // setTimeout(()=>{
        //     //     this.$store.dispatch('jiaWait',this.n)
        //     // },500)
        //     this.$store.dispatch('jiaWait',this.n)
        // },
        // 借助mapActions生成对应的方法,方法中会调用dispatch去联系dispatch(对象写法)
        ...mapActions({inCrementOdd:'jiaOdd',inCrementWait:'jiaWait'}),

        // 借助mapActions生成对应的方法,方法中会调用dispatch去联系dispatch(数组写法)
        // ...mapActions(['jiaOdd','jiaWait']),
    },
    mounted(){
        // console.log('Count',this)
        // const x = mapState({he:'sum'})
        // console.log(x)
    }
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>