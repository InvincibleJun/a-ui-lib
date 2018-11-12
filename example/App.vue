<template>
  <div>
    <div>sadas</div>
    <div>sadas</div>
    <div>sadas</div>
    <div>sadas</div>
    <div>sadas</div>
    <!-- <div style="width:300px">

    <el-progress :text-inside="true" :stroke-width="18" :percentage="1"></el-progress>
  </div>
  <div  style="width:300px">
      <c-progress :value="v" :textInside="false" :height="20" type="line"></c-progress>
  </div>
  <div  style="width:100px">
      <c-progress :value="v" :textInside="true" type="circle"></c-progress>
  </div> -->
    <!-- <c-collapse style="width: 300px" v-model="value" :accordion="true">
      <c-collapse-item name="1">
        1
        <p slot="content">一</p>
      </c-collapse-item>
      <c-collapse-item name="2">
         2
        <p slot="content">二</p>
      </c-collapse-item>
      <c-collapse-item name="3">
          3
        <div slot="content">
          <p>12312asdasd</p>
          <p>12312asdasd</p>
          <p>12312asdasd</p>
          <p>12312asdasd</p>
        </div>
      </c-collapse-item>
    </c-collapse> -->
    <c-tooltip content="123f" placement="right-start" >
      <div>test</div>
    </c-tooltip>
  </div>
</template>

<script>
import LoadingBar from "../src/components/loading-bar";

export default {
  data() {
    return {
      v: 20,
      value: '1',
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
