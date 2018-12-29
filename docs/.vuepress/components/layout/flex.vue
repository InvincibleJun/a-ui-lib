<template>
  <div>
    <Row :gutter="16" type="flex" justify="center" class="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
    </Row>
    <Row :gutter="16" type="flex" justify="flex-start" class="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
    </Row>
    <Row :gutter="16" type="flex" justify="space-around" class="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
    </Row>
    <Row :gutter="16" type="flex" justify="space-between" class="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
    </Row>
  </div>
</template>

<script>
import Row from "@/components/row";
import Col from "@/components/col";
import "@/assets/css/index.scss";

export default {
  components: {
    Row,
    Col
  }
};
</script>

<style>
.col {
  background-color: #3eaf7c;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}

.line {
  margin: 10px;
}
</style>
