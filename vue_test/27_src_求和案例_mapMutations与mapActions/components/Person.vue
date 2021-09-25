<template>
  <div>
      <h1>人员列表</h1>
      <h2 style="color:red">count的求和为:{{sum}}</h2>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>

      <ul>
          <li v-for="p in PersonList" :key="p.id">
              {{p.name}}
          </li>
      </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapMutations, mapState } from 'vuex'
    export default {
        name:'Person',
        data(){
            return {
                name:''
            }
        },
        computed:{
            ...mapState(['PersonList','sum']),
        },
        methods:{
            add(){
                const personObj = {
                    id:nanoid(),
                    name:this.name
                }

                console.log(personObj)
                this.name = ''
                this.$store.commit('ADD_PERSON',personObj)
                

            },
            // ...mapMutations({'ADD_PERSON'})
        }
    }
</script>

<style>

</style>