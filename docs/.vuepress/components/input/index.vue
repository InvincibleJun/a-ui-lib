<template>
  <div>
    <Input v-model="value"/>
  </div>
</template>

<script>
import Input from "@/components/input";
import "@/assets/css/input.scss";

export default {
  components: {
    Input
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>
