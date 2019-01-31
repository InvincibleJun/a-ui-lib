<template>
  <div>
    <c-button @click="start">开启</c-button>
  </div>
</template>

<script>
import LoadingBar from "@/components/loading-bar";
import CButton from "@/components/button";
import "@/assets/css/index.scss";

export default {
  components: {
    LoadingBar,
    CButton
  },
  methods: {
    start() {
      LoadingBar.start();
    }
  },
  mounted() {
    // LoadingBar.start();
  }
};
</script>
