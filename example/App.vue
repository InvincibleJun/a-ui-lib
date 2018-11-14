<template>
  <div style="margin-left: 300px; height: 200px;width: 200px">
    <!-- <c-button @click="c" :disabled="true">aa</c-button> -->
    <!-- <c-loading :show="true" ></c-loading> -->
    <c-datepicker v-model="value"/>
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
    select(a) {
      // console.log(a);
    }
  },
  created() {
    setInterval(() => {
      this.v = 100 * Math.random();
    }, 200);
  }
};
</script>
