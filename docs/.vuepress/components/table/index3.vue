<template>
  <c-table :data="data" :config="config" stripe border center number></c-table>
</template>

<script>
import cTable from "@/components/table";
// import tableColumn from "@/components/table";

export default {
  components: {
    cTable
    // cTableColumn
  },
  data() {
    return {
      data: [
        { name: "A", id: 2, age: 12, six: "boy", count: 1 },
        { name: "B", id: 4, age: 14, six: "gril", count: 2 }
      ],
      config: [
        {
          key: "name",
          width: 200,
          title: "名字",
        },
        {
          // key: "描述",
          // width: 900,
          title: "描述",
          children: [
            {
              // key: "name",
              // width: 400,
              children: [
                {
                  // key: 'six',
                  title: "测试",
                  children: [
                    {
                      key: "six",
                      title: "性别"
                    },
                    {
                      sort: true,
                      key: "count",
                      title: "总数"
                    }
                  ]
                },
                {
                  key: "name",
                  title: "姓名"
                }
              ],
              title: "A"
            },
            {
              key: "age",
              width: 100,
              title: "年龄"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
tr:nth-child(2n) {
  background-color: transparent;
}

th,
td {
  border: transparent;
  padding: 0;
}
tr {
  border-top: transparent;
}
</style>
