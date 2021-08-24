/*
 * @Descripttion: 
 * @Author: xuewei
 * @version: 
 * @Date: 2021-08-23 13:02:41
 * @LastEditors: xuewei
 * @LastEditTime: 2021-08-24 20:44:04
 */
export default {
    install(Vue){
        

        // 全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        // 定义全局指令
        Vue.directive('fbind',{
            // 指令与元素成功绑定时(一上来)
            bind(element,binding){
                element.value=binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element,binding){
                console.log(binding)
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element,binding){
                element.value=binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })

        //给Vue原型上添加一个方法（vm和vc都可以用）
        Vue.prototype.dello = ()=> {alert('你好')}


    }
}