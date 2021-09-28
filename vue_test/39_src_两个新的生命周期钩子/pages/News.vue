<template>  
    <div>
        <ul>
            <li :style="{opacity}">
                欢迎学习Vue
            </li>
            <li>
                news001 <input type="text">
            </li>
            <li>
                news002 <input type="text">
            </li>
            <li>
                news003 <input type="text">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'News',
        data:{
            opacity:1,
            // timer:''
        },
        // beforeDestroy(){
        //     console.log('News组件即将被销毁了')
        //     clearInterval(this.timer)
        // },
        // mounted(){
        //     console.log('mounted',this)

        //     this.timer = setInterval(()=>{
        //         this.opacity -= 0.01

        //         if(this.opacity <= 0){
        //             this.opacity = 1
        //         }
        //     },16)
        // },
        activated(){
            console.log('News组件被激活了')

            this.timer = setInterval(()=>{
                this.opacity -= 0.01

                if(this.opacity <= 0){
                    this.opacity = 1
                }
            },16)
        },
        deactivated(){
            console.log('News组件被失活了')
            clearInterval(this.timer)
        }
    }
</script>

<style>

</style>