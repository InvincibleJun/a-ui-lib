# Tabs 标签页

### example

```
    <c-tabs v-model="value">
      <c-tabs-item label="a">1</c-tabs-item>
      <c-tabs-item label="b">2</c-tabs-item>
      <c-tabs-item label="c">3</c-tabs-item>
      <c-tabs-item label="d">4</c-tabs-item>
      <c-tabs-item label="e">5</c-tabs-item>
    </c-tabs>
```

### props

#### tabs

| key      | type          | enum      | requried | default | desc                      |
| -------- | ------------- | --------- | -------- | ------- | ------------------------- |
| value    | String/Number | -         | false    | -       | 绑定 valude，支持 v-model |
| position | String        | top       | false    | top     | 位置                      |
| type     | String        | card/line | false    | line    | 标签页样式                |
| animated | Boolean       | -         | false    | true    | 是否支持动画              |

#### tabs-item

| key   | type          | enum | requried | default | desc     |
| ----- | ------------- | ---- | -------- | ------- | -------- |
| value | String/Number | -    | true     | -       | 标签名称 |
