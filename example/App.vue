<template>
  <div>
    <!-- <div style="width:300px">

    <el-progress :text-inside="true" :stroke-width="18" :percentage="1"></el-progress>
  </div>
  <div  style="width:300px">
      <c-progress :value="v" :textInside="false" :height="20" type="line"></c-progress>
  </div>
  <div  style="width:100px">
      <c-progress :value="v" :textInside="true" type="circle"></c-progress>
  </div> -->
    <c-collapse style="width: 300px" @beforeEnter="c">
      <c-collapse-item>
        1
        <p slot="content">一</p>
      </c-collapse-item>
      <c-collapse-item>
         2
        <p slot="content">二</p>
      </c-collapse-item>
      <c-collapse-item>
          3
        <div slot="content">
          <p>12312asdasd</p>
          <p>12312asdasd</p>
          <p>12312asdasd</p>
          <p>12312asdasd</p>
        </div>
      </c-collapse-item>
    </c-collapse>
  </div>
</template>

<script>
import LoadingBar from "../src/components/loading-bar";

export default {
  data() {
    return {
      v: 20
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

    this.$LoadingBar.start();
  }
};
</script>
