<template>
  <div id="app">
    <c-carousel :width="400" :height="300">
      <c-carousel-item>
        <div class="item">1</div>
      </c-carousel-item>
      <c-carousel-item>
        <div class="item">2</div>
      </c-carousel-item>
      <c-carousel-item>
        <div class="item">3</div>
      </c-carousel-item>
      <c-carousel-item>
        <div class="item">4</div>
      </c-carousel-item>
      <c-carousel-item>
        <div class="item">5</div>
      </c-carousel-item>
    </c-carousel>
    <!-- <Test></Test> -->
  </div>
</template>

<script>
import CCarousel from './components/carousel'
import CCarouselItem from './components/carousel/item'
import Test from './test'
export default {
  name: 'App',
  data() {
    return {
      value: 'rgba(36, 46, 109, 0.5)'
    }
  },
  components: {
    Test,
    CCarousel,
    CCarouselItem
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

.item {
  text-align: center;
  width: 100%;
  height: 300px;
  line-height: 300px;
  background-color: #ccc;
}

#app {
  // width: 200px;
  // height: 150px;
}

@import '@/assets/css/dropdown.scss';
@import '@/assets/css/button.scss';
@import '@/assets/css/datepicker.scss';
@import '@/assets/css/carousel.scss';

div {
  box-sizing: border-box;
}

.c-progress-line-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.c-progress-line-percentage {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  background-color: #67c23a;
  height: 100%;
}

.c-progress-line-not-inside {
  margin-right: -55px;
  padding-right: 50px;
  display: inline-block;
}

.c-progress-line-bar {
  width: 100%;
  background-color: #ebeef5;
  vertical-align: middle;
  display: inline-block;
  position: relative;
  height: 20px;
}

.c-progress-text {
  margin-left: 5px;
  vertical-align: middle;
  display: inline-block;
}

.even {
  background-color: #fff;
}

.odd {
  background-color: #ccc;
}
/*table start*/
.default-table {
  /* -moz-border-radius: 5px;  
    -webkit-border-radius:5px;  
    border-radius:5px; */
  width: 100%;
  border: solid #333;
  border-width: 1px 0px 0px 1px;
  font-size: #333;
  border-collapse: collapse;
  border-spacing: 0;
}
.default-table tbody tr {
  height: 20px;
  line-height: 20px;
}
.default-table tbody tr.odd {
  background-color: #fff;
}
.default-table tbody tr.even {
  background-color: #f5f5f5;
}
.default-table tbody tr:hover {
  background-color: #eee;
}
.default-table tbody tr th,
.default-table tbody tr td {
  padding: 3px 5px;
  text-align: left;
  /* border: 1px solid #ddd; */
  border: solid #333;
  border-width: 0px 1px 1px 0px;
}
.default-table tbody tr th {
  font-weight: bold;
  text-align: center;
}

.default-table tbody tr td.tac {
  text-align: center;
}
.default-table tbody tr td a:hover {
  color: #0080c0;
}
/*table end*/

.c-row {
  position: relative;
  box-sizing: border-box;
}

.c-row-flex {
  display: flex;
}

$justify: flex-start flex-end center space-around space-between;
@each $i in $justify {
  .c-row-justify-#{$i} {
    justify-content: $i;
  }
}

$align: center flex-start flex-end;
@each $i in $align {
  .c-row-align-#{$i} {
    align-items: $i;
  }
}

.c-row:before,
.c-row:after {
  clear: both;
  content: '';
  display: table;
}

@for $i from 1 through 24 {
  .c-col-#{$i} {
    width: $i / 24 * 100%;
  }
}

.c-col {
  float: left;
  box-sizing: border-box;
}

@for $i from 1 through 24 {
  .c-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
}

$size: (
  xs: 768px,
  sm: 768px,
  md: 992px,
  lg: 1200px,
  xl: 1920px
);

@each $s, $v in $size {
  @if $s == xs {
    @media only screen and (max-width: $v) {
      @for $i from 1 through 24 {
        .c-col-#{$s}-#{$i} {
          width: $i / 24 * 100%;
        }
      }
    }
  } @else {
    @media only screen and (min-width: $v) {
      @for $i from 1 through 24 {
        .c-col-#{$s}-#{$i} {
          width: $i / 24 * 100%;
        }
      }
    }
  }
}
</style>
