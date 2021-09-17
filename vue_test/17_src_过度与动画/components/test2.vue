<template>  
    <div>
        <button @click="isShow = !isShow">显示 / 隐藏</button>
        <transition-group name="hello" appear>
                <h1 v-show="isShow" key="1">你好啊!</h1>
                <h1 v-show="isShow" key="2">bilbil</h1>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name:'Test2',
        data(){
            return {
                isShow:true
            }
        }
    }
</script>

<style scoped>
    h1 {
        background-color: orange;
        transition: 0.5s linear;
    }

    /**.hello-enter 进入的起点 .hello-leave-to 离开的终点*/
    .hello-enter .hello-leave-to{
        transform: translateX(-100%)
    }

    /**.hello-enter-to 进入的终点 .hello-leave 离开的起点*/
    .hello-enter-to .hello-leave{
        transform: translateX(0%)
    }

</style>