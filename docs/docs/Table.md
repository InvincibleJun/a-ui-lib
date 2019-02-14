# Table 表格

## 示例

### 常规表格

<table-index />

```
<template>
  <c-table :data="data" :config="config" border></c-table>
</template>
<script>
export default {
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
          width: 80,
          title: "总分"
        }
      ]
    };
  }
};
</script>
```

### 组合表格


<table-index3 />

### props

| key        | type    | enum       | requried | default | desc           |
| ---------- | ------- | ---------- | -------- | ------- | -------------- |
| center     | Boolean | true/false | false    | false   | 是否居中       |
| number     | Boolean | true/false | false    | false   | 是否显示编号   |
| width      | Number  | -          | false    | -       | 单列宽度       |
| stripe     | Boolean | true/false | false    | false   | 是否显示斑马线 |
| numberName | String  | -          | false    | #       | 编号表头名     |
| border     | Boolean | -          | false    | false   | 显示边框       |
| data       | Array   | -          | false    | []      | 填充数据       |
| config     | Array   | -          | true     | -       | 配置           |
