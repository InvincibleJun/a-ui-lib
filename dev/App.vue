<template>
  <div id="app">
    <c-upload action="http://douquimgtest.wanxin.com/upload/audio"></c-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1
    };
  },
  created() {
    // this.$LoadingBar.start();
    // setTimeout(() => {
    // this.a = 80
    // }, 1000)
  }
};
</script>

