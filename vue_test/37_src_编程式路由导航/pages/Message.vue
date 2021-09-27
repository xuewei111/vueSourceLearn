<template>  
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!--跳转路由并携带query参数，to的字符串写法-->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                <!--跳转路由并携带query参数，to的对象写法-->
                <router-link :to="{
                    path:'/home/message/detail',
                    params:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
                </router-link>&nbsp;&nbsp;
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data(){
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'},
                ]
            }
        },
        methods:{
            pushShow(m){
                // console.log(this.$router)
                this.$router.push({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        titel:m.title
                    }
                })
            },
            replaceShow(m){
                this.$router.replace({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        titel:m.title
                    }
                })
            }
        }
    }
</script>

<style>

</style>