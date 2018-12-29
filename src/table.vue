
<template>
  <ElTable
    :data="tableData"
    border
    style="width: 100%"
  >
    <ElTableColumn
      fixed
      prop="date"
      label="日期"
      width="150"
    />
    <ElTableColumn
      fixed
      prop="name"
      label="姓名"
      width="120"
    />
    <ElTableColumn
      prop="province"
      label="省份"
      width="120"
    />
    <ElTableColumn
      prop="city"
      label="市区"
      width="120"
    />
    <ElTableColumn
      prop="address"
      label="地址"
      width="300"
    />
    <ElTableColumn
      fixed="right"
      prop="zip"
      label="邮编"
      width="120"
    />
    <ElTableColumn
      fixed="right"
      label="操作"
      width="100"
    >
      <template slot-scope="scope">
        <ElButton
          @click="handleClick(scope.row)"
          type="text"
          size="small"
        >
          查看
        </ElButton>
        <ElButton
          type="text"
          size="small"
        >
          编辑
        </ElButton>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<script>
import Table from '../node_modules/element-ui/packages/table/src/table';
import TableColumn from '../node_modules/element-ui/packages/table-column/index';
import Button from '../node_modules/element-ui/packages/button';

export default {
  components: {
    ElTableColumn: TableColumn,
    ElTable: Table,
    ElButton: Button
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>
