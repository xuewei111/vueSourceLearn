
import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function (){
    // 实现鼠标打点的数据
    let point = reactive({
        x:0,
        y:0
    })

    // 实现鼠标打点的方法
    const savePonit = (e)=>{
            point.x = e.pageX
            point.y = e.pageY
            console.log(e.pageX,e.pageY)
        } 

    // 实现鼠标打点的钩子
    onMounted(()=>{
        window.addEventListener('click',savePonit)
    })

    onBeforeUnmount(()=>{
        window.removeEventListener('click',savePonit)
    })

    return point
}