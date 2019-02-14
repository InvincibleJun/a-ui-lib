<template>
  <div class="container">
    <c-table :data="data" :config="config" border></c-table>
  </div>
</template>
<script>
import cTable from "@/components/table";
import '@/assets/css/table.scss';

export default {
  components: {
    cTable
    // cTableColumn
  },
  data() {
    return {
      data: [
        { name: "小明", id: 2, age: 12, six: "boy", count: 100 },
        { name: "小明", id: 4, age: 14, six: "gril", count: 50 },
        { name: "小明", id: 4, age: 14, six: "boy", count: 60 },
        { name: "小明", id: 4, age: 14, six: "gril", count: 88 },
        { name: "小明", id: 4, age: 14, six: "boy", count: 40 },
        { name: "小明", id: 4, age: 14, six: "gril", count: 88 },
        { name: "小明", id: 4, age: 14, six: "boy", count: 55 },
        { name: "小明", id: 4, age: 14, six: "gril", count: 22 },
        { name: "小明", id: 4, age: 14, six: "boy", count: 33 },
        { name: "小明", id: 4, age: 14, six: "gril", count: 11 },
        { name: "小明", id: 4, age: 14, six: "gril", count: 99 }
      ],
      config: [
        {
          key: "name",
          width: 200,
          title: "名字"
        },
        {
          key: "id",
          title: "id"
        },
        {
          key: "age",
          title: "年龄"
        },
        {
          key: "count",
          title: "总分"
        }
      ]
    };
  }
};
</script>
