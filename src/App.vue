<template>
  <div id="app">
    <c-progress :percentage="50"></c-progress>
  </div>
</template>

<script>
import Modal from './components/modal'
import CProgress from './components/progress'
// import CTabelColumn from './components/table-column'

export default {
  name: 'App',
  components: {
    // CTabel,
    CProgress
  }
}
</script>

<style>
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
</style>
