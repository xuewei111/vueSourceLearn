/*
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-23 12:43:18
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-23 12:51:06
 */
export const mixin = {
    methods: {
        showName(){
            console.log(this.name)
        }
    },
    mounted() {
        console.log('你好')
    },
}

export const mixin2 = {
    data(){
        return {
            x:100,
            y:200
        }
    }
}


// export default 