<template>
  <div style="width: 200px; height: 200px; position: relative">
    <c-loading :show="show"></c-loading>
  </div>
</template>

<script>
import CLoading from "@/components/loading";
import "@/assets/css/loading.scss";

export default {
  components: {
    CLoading
  },
  data() {
    return {
      show: true,
      timer: null
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.show = false
    }, 2000)
  },
  destroyed() {
    clearTimeout(this.timer)
  }

};
</script>
