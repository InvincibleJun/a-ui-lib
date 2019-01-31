<template>
  <div>
    <div style="width:300px">
      <c-progress :value="value1" :textInside="false" :height="20" type="line"></c-progress>
    </div>
    <br>
    <div style="width:300px">
      <c-progress :value="value2" :textInside="true" type="line"></c-progress>
    </div>
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