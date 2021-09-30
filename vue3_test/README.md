### 常用的CompositionApi

1.拉开序幕的setup
    1.理解:Vue3.0中一个新的配置项,值为一个函数

    2.setup是所有CompositionAPI(组合API) 表演的舞台

    3.组件中所用到的:数据,方法等等,均要配置再setup中

    4.setup函数的两种返回值:
        1.若返回一个对象,则对象的属性,方法,在模板中均可直接使用(重点关注!)
        2.若返回一个渲染函数：则可以自定义渲染内容(了解)

    5.注意点:
        1.尽量不要与Vue2.x配置混用
            Vue2.x配置(data,methods,computed...)中可以访问到setup中的属性,方法
            但在setup中不能访问到Vue2.x配置的(data,methods,computed)
            如果有重名,setup优先

        2.setup不能是一个async函数,因为返回值不再是return的对象,而是promise,模板看不到return对象中的属性

2.ref函数
    作用:定义一个响应式的数据

    语法:const xxx = ref(initValue)
        创建一个包含响应式数据的引用对象(reference对象,简称ref对象)
        js中操作数据 xxx.value
        模板中读取数据:不需要.value, 直接:<div>{xxx}</div>
    
    备注:
        接收的数据可以是:基本类型,也可以是对象类型
        基本类型的数据:响应式依然是靠Object.defineProperty的get与set完成的
        对象类型的数据:内部求助了Vue3.0中的一个新函数------reactive函数

3.reactive函数
    作用:定义一个对象类型的响应式数据(基本类型不要用它,要用ref函数)

    语法:const 代理对象 = reactive(源对象)接收一个对象(或数组),返回一个代理对象(Proxy的实例对象,简称proxy对象)

    reactive定义的响应式数据是'深层次的'

    内部基于ES6的Proxy实现,通过代理对象操作源对象内部数据进行操作

4.Vue3.0中的响应式原理
    vue2.x的响应式
        实现原理:
            对象类型:通过Object.defineProperty()对属性的读取,修改进行拦截(数据劫持)

            数组类型:通过重写更新数组的一系列方法来实现拦截(对数组的变更方法进行了包裹)
            Object.defineProperty(data,'count',{
                get(){

                },
                set(){

                }
            })

        存在问题:
            新增属性,删除属性,界面不会更新
            
            直接通过下标修改数组,界面不会自动更新

    Vue3.0的响应式
        实现原理
            通过Proxy(代理):拦截对象中任意属性的变化,包括:属性值的读写,属性的添加,属性的删除等

            通过Reflect(反射):对源对象的属性进行操作

            MDN文档中描述的Proxy与Reflect

                Proxy:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

                Reflect:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

            new Proxy(data,{
                //拦截读取属性值
                get(target,prop){
                    return Reflect.get(target,prop)
                },
                // 拦截设置属性值或添加新属性
                set(target,prop,value){
                    return Refelct.set(target,prop,value)
                },
                //拦截删除属性
                deleteProperty(target,prop){
                    return Reflect.deleteProperty(target,prop)
                }
            })

            proxy.name = 'tom'

5.reactive对比ref
    从定义数据角度对比:
        ref用来定义:基本类型数据

        reactive用来定义:对象(或数组)类型数据

        备注:ref也可以用来定义对象(或数组)类型数据,它内部会自动通过reactive转为代理对象

    从原理角度对比
        ref通过Object.defineProperty()的get与set来实现响应式(数据劫持)
        
        reactive通过使用Proxy来实现响应式(数据劫持),并通过Reflect操作源对象内部的数据

    从使用角度对比:
        ref定义的数据:操作数据需要.value 读取数据时模板中直接读取不需要.value

        reactive定义的数据:操作数据与读取数据:均不需要.value

6.setup的两个注意点
    setup执行的时机
        在beforeCreate之前执行一次,this是undefined

    setup是参数
        props:值为对象,包含:组件外部传递过来,但没有在props配置中声明的属性,相当于this.$attrs

        slots:收到的插槽内容,相当于this.$slots

        emit:分发自定义事件的函数,相当于this.$emit

7.计算属性与监视
    1.computed函数
        与Vue2.x中的computed配置功能一致
        写法
            import {computed} from 'vue'

            setup(){
                ...
                // 计算属性 ---- 简写
                let fullName = computed(()=>{
                    return person.firstName + '-' + person.lastName
                })
                //计算属性 ---- 完整
                let fullName = computed({
                    get(){
                        return person.firstName + '-' + person.lastName
                    },
                    set(value){
                        const nameArr = value.split('-')

                        person.firstName = nameArr[0]
                        person.lastName = nameArr[1]
                    }
                })
            }
