<template>
  <div>
    <Row :gutter="16" class="line">
      <Col :xs="2" :sm="4" :md="6" :lg="8" :xl="4">
        <div class="col">col-4</div>
      </Col>
      <Col :xs="20" :sm="16" :md="12" :lg="8" :xl="16">
        <div class="col">col-16</div>
      </Col>
      <Col :xs="2" :sm="4" :md="6" :lg="8" :xl="4">
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
