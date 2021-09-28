// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


// 创建并暴露一个路由器
const router =  new VueRouter({
    routers:[
        {   
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{
                isAuth:true,
                title:'关于'
            }
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{
                isAuth:true,
                title:'主页'
            },
            children:[
                {
                    path:'news',
                    component:News,
                    meta:{
                        isAuth:false,
                        title:'新闻'
                    },
                    beforeEnter(to,from,next){
                        console.log(to,from)
                        if(to.meta.isAuth){ //判断是否需要鉴权
                            if(localStorage.getItem('school') === 'atguigu'){
                                next()
                            } else {
                                alert('学校名不对,无权查看!')
                            }
                        }
                    }
                },
                {
                    path:'message',
                    component:Message,
                    meta:{
                        isAuth:false,
                        title:'消息'
                    },
                    children:[
                        {
                            path:'detail/:id/:title',
                            component:Detail,
                            meta:{
                                isAuth:false,
                                title:'详情'
                            },
                            // props的第一种写法，值为对象,该对象中的所有Key-value都会以props的形式传递给Dateil组件
                            // props:{a:1,b:'hello'}

                            // props的第二种写法,值为布尔值,若布尔值为真,就会把该路由组件收到的所有params参数,以props的形式传给Detail组件
                            // props:true

                            // props的第三种写法,值为函数
                            props({query:{id,title}}){
                              return {id,title}  
                            }
                        }
                    ]
                }
            ]
        },

        {
            path:'/*',
            component: ()=>import('@/pages/NotView')
        }
    ]
})
// 全局前置路由守卫 ----- 初始化的时候被调用,每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     console.log(to,from)
//     if(to.meta.isAuth){ //判断是否需要鉴权
//         if(localStorage.getItem('school') === 'atguigu'){
//             next()
//         } else {
//             alert('学校名不对,无权查看!')
//         }
//     }
    
// })

// 全局后置路由守卫 ----- 初始化的时候被调用,每次路由切换之后前被调用
// router.beforeEach((to,from)=>{
//     console.log('后置路由守卫',to,from)
//     document.title = to.meta.title || '硅谷系统'
// })

export default router