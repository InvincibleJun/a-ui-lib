<template>
  <div>
    <div style="width:300px">

    <el-progress :text-inside="true" :stroke-width="18" :percentage="1"></el-progress>
  </div>
  <div  style="width:300px">
      <c-progress :value="v" :textInside="false" :height="20" type="line"></c-progress>
  </div>
  <div  style="width:100px">
      <c-progress :value="v" :textInside="true" type="circle"></c-progress>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v: 20
    }
  },
  created() {
    setInterval(() => {
      this.v = 100 * Math.random()
    }, 2000)
  }
};
</script>
