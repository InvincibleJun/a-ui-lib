<template>
  <div id="app">
    <c-tabel :data="data" :stripe="true" :config="config"></c-tabel>
  </div>
</template>

<script>
import Modal from './components/modal'
import CTabel from './components/table'
import CTabelColumn from './components/table-column'

export default {
  name: 'App',
  components: {
    CTabel,
    CTabelColumn
  },
  data () {
    return {
      config: [
        {
          title: '操作',
          width: 100,
          fixed: 'left',          
          render: (h, params) => {
            // console.log(params)
            return h('div', null, '213')
          }
        },
        {
          title: '时间',
          fixed: 'left',          
          width: 100,
          key: 'date',
        },
        {
          title: '配送时间',
          children: [
            {    
              key: 'name',
              title: '姓名',
              width: 100              
            },
            {
              title: '地址',
              children: [
                {
                  key: 'province',
                  title: '省份'
                },
                {
                  key: 'city',
                  title: '市区',
                  width: 200
                },
                {
                  key: 'address',
                  title: '地址',
                  width: 300                 
                }
              ]
            }
          ]
        },
        {
          title: '做',
          key: '',
          fixed: 'right'
        }
      ],
      data: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
