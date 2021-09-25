<template>
  <div>
      <h1>人员列表</h1>
      <h2 style="color:red">count的求和为:{{sum}}</h2>
      <h3>列表中的的一个人的名字是:{{firstPersonName}}</h3>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>
      <button @click="addPersonWang(name)">添加应该姓王的人</button>

      <button @click="addPersonServer">添加一个服务器请求的人</button>

      <ul>
          <li v-for="p in PersonList" :key="p.id">
              {{p.name}}
          </li>
      </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapActions, mapGetters, mapState } from 'vuex'
    export default {
        name:'Person',
        data(){
            return {
                name:''
            }
        },
        computed:{
            ...mapState('countOptions',['sum']),
            ...mapState('personOptions',['PersonList']),
            ...mapGetters('personOptions',['firstPersonName'])
        },
        methods:{
            add(){
                const personObj = {
                    id:nanoid(),
                    name:this.name
                }

                console.log(personObj)
                this.name = ''
                this.$store.commit('personOptions/ADD_PERSON',personObj)
                

            },
            addPersonWang(){
                const personObj = {
                    id:nanoid(),
                    name:this.name
                }
                this.name = ''
                this.$store.dispatch('personOptions/addPersonWang',personObj)
            },
            ...mapActions('personOptions',['addPersonServer'])
            // ...mapActions('personOptions',['addPersonWang'])
            // ...mapMutations({'ADD_PERSON'})
        }
    }
</script>

<style>

</style>