<template>
  <div @click="open">
    点我
  </div>  
</template>

<script>
import Message from '@/components/message';
import '@/assets/css/message.scss'

export default {
  methods:{
    open () {
      Message.success({
        title: '测试',
        content: '测试一哈'
      })
    }
  }
}

</script>
