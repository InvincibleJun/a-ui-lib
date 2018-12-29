<template>
  <div>
    <Row class-name="line">
      <Col :spans="6">
        <div class="col">col-6</div>
      </Col>
      <Col :spans="6">
        <div class="col">col-6</div>
      </Col>
      <Col :spans="6">
        <div class="col">col-6</div>
      </Col>
      <Col :spans="6">
        <div class="col">col-6</div>
      </Col>
    </Row>

    <Row :gutter="16" className="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="8">
        <div class="col">col-8</div>
      </Col>
      <Col :spans="12">
        <div class="col">col-6</div>
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
  background-color: rgba(0, 153, 229, 0.9);
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}

.line {
  margin: 10px;
}
</style>
