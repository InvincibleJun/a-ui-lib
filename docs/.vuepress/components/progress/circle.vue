<template>
  <div>

    <c-progress :value="value1" :textInside="false" :height="20" type="circle"></c-progress>
    <br>

    <c-progress :value="value2" :textInside="true" type="circle" color="#ccc"></c-progress>
  </div>
</template>

<script>
import CProgress from "@/components/progress";
import "@/assets/css/index.scss";

export default {
  components: {
    CProgress
  },
  data() {
    return {
      value1: 0,
      value2: 0
    };
  },
  created() {
    setInterval(() => {
      this.value1 = 100 * Math.random();
      this.value2 = 100 * Math.random();
    }, 2000);
  }
};
</script>