<template>
  <div>
    <c-colorpicker
      v-model="value"
      @on-open="handlerOpen"
      @on-close="handlerClose"
      @on-change="handlerChange"
    />
  </div>
</template>

<script>
import CColorpicker from "@/components/colorpicker";
import "@/assets/css/colorpicker.scss";

export default {
  components: {
    CColorpicker
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    handlerOpen(v) {
      console.log(v);
    },
    handlerClose(v) {
      console.log(v);
    },
    handlerChange(v) {
      console.log(v);
    }
  }
};
</script>
