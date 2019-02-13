<template>
  <div class="box">
    <div class="top">
      <c-tooltip placement="top-start">
        <div>上左</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
      <c-tooltip placement="top-center">
        <div>上中</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
      <c-tooltip placement="top-end">
        <div>上右</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
    </div>

    <div class="left">
      <c-tooltip placement="left-start">
        <div>左上</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
      <c-tooltip placement="left-center">
        <div>左中</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
      <c-tooltip placement="left-end">
        <div>左下</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
    </div>

    <div class="right">
      <c-tooltip placement="right-start">
        <div>右上</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
      <c-tooltip placement="right-center">
        <div>右中</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
      <c-tooltip placement="right-end">
        <div>右下</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
    </div>

    <div class="bottom">
      <c-tooltip placement="bottom-start">
        <div>下左</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
      <c-tooltip placement="bottom-center">
        <div>下中</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
      <c-tooltip placement="bottom-end">
        <div>下左</div>
        <div slot="content">我是谁？？？</div>
      </c-tooltip>
    </div>
  </div>
</template>

<script>
import CTooltip from "@/components/tooltip";
import "@/assets/css/tooltip.scss";

export default {
  components: {
    CTooltip
  }
};
</script>

<style>
.box {
  width: 400px;
  margin: 0 auto;
}
.top {
  text-align: center;
}
.left {
  float: left;
  width: 40px;
}
.right {
  float: right;
  width: 40px;
}
.bottom {
  clear: both;
  text-align: center;
}
</style>