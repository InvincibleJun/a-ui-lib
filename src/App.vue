<template>
  <div id="app">
    <!-- <Upload action="http://imgtest.357.com/upload/wjwxpic" /> -->

    <Input v-model="value" :disabled="true" />
    <!-- <color-picker v-model="value"></color-picker> -->
  </div>
</template>

<script>
import Input from '@/components/Input'
// import colorPicker from '@/components/colorPicker';

export default {
  components: {
    Input,
  },
  name: 'App',
  data() {
    return {
      value: 'hellow'
    }
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

@import '@/assets/css/dropdown.scss';
@import '@/assets/css/button.scss';
@import '@/assets/css/datepicker.scss';
@import '@/assets/css/carousel.scss';
@import '@/assets/css/upload.scss';
@import '@/assets/css/input.scss';

div {
  box-sizing: border-box;
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
</style>
