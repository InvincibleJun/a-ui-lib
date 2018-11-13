<template>
  <div style="margin-left: 300px; height: 200px;width: 200px">
    <!-- <c-button @click="c" :disabled="true">aa</c-button> -->
    <!-- <c-loading :show="true" ></c-loading> -->
    <c-colorpicker v-model="value"></c-colorpicker>
  </div>
</template>

<script>

export default {
  data() {
    return {
      v: 20,
      value: ""
    };
  },
  methods: {
    c() {
      console.log(1);
    }
  },
  created() {
    setInterval(() => {
      this.v = 100 * Math.random();
    }, 200);
  }
};
</script>
