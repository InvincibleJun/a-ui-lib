<template>
  <c-tabs v-model="value" type="card">
    <c-tabs-item label="1">1</c-tabs-item>
    <c-tabs-item label="2">2</c-tabs-item>
    <c-tabs-item label="3">1</c-tabs-item>
    <c-tabs-item label="4">1</c-tabs-item>
    <c-tabs-item label="5">1</c-tabs-item>
    <c-tabs-item label="6">1</c-tabs-item>
    <c-tabs-item label="7">1</c-tabs-item>
    <c-tabs-item label="8">1</c-tabs-item>
    <c-tabs-item label="9">1</c-tabs-item>
    <c-tabs-item label="10">1</c-tabs-item>
    <c-tabs-item label="11">1</c-tabs-item>
    <c-tabs-item label="12">1</c-tabs-item>
    <c-tabs-item label="13">1</c-tabs-item>
    <c-tabs-item label="14">1</c-tabs-item>
    <c-tabs-item label="15">1</c-tabs-item>
    <c-tabs-item label="16">1</c-tabs-item>
    <c-tabs-item label="17">2</c-tabs-item>
    <c-tabs-item label="18">1</c-tabs-item>
    <c-tabs-item label="19">1</c-tabs-item>
    <c-tabs-item label="20">1</c-tabs-item>
    <c-tabs-item label="21">1</c-tabs-item>
    <c-tabs-item label="22">1</c-tabs-item>
    <c-tabs-item label="23">1</c-tabs-item>
    <c-tabs-item label="24">1</c-tabs-item>
    <c-tabs-item label="25">1</c-tabs-item>
    <c-tabs-item label="26">1</c-tabs-item>
    <c-tabs-item label="27">1</c-tabs-item>
    <c-tabs-item label="28">1</c-tabs-item>
    <c-tabs-item label="29">1</c-tabs-item>
    <c-tabs-item label="30">1</c-tabs-item>
  </c-tabs>
</template>

<script>
import cTabs from "@/components/tabs";
import cTabsItem from "@/components/tabs-item";
import "@/assets/css/tabs.scss";

export default {
  components: {
    cTabs,
    cTabsItem
  },
  data() {
    return {
      value: "1"
    };
  },
  mounted() {
    setInterval(() => {
      this.value = Math.floor(Math.random() * 30) + "";
      console.log(this.value)
    }, 600);
  }
};
</script>
