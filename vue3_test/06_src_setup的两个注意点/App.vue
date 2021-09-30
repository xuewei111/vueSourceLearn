<template>
  <Demo msg="你好" school="blibli" @hello="showHelloMsg">
    <template v-slot:qwe>
      <span>bilbil</span>
    </template>
  </Demo>

</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components:{
    Demo
  },
  setup(){
    function showHelloMsg(val){
      alert(`你好啊,你触发了hello事件,我收到的参数是:${val}`)
    }

    return {
      showHelloMsg
    }
  }
}
</script>

