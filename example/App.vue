<template>
  <div>
    <c-tabs v-model="value">
      <c-tabs-item label="a">1</c-tabs-item>
      <c-tabs-item label="b">2</c-tabs-item>
      <c-tabs-item label="c">3</c-tabs-item>
      <c-tabs-item label="d">4</c-tabs-item>
      <c-tabs-item label="5">5</c-tabs-item>
    </c-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v: 20,
      value: "b"
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
