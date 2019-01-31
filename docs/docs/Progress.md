# Progress 进度条

### 示例

#### 线性
<progress-line />
```
<template>
  <div>
    <div style="width:300px">
      <c-progress :value="value1" :textInside="false" :height="20" type="line"></c-progress>
    </div>
    <br>
    <div style="width:300px">
      <c-progress :value="value1" :textInside="true" type="line"></c-progress>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    CProgress
  },
  data() {
    return {
      value1: 0,
      value2: 0
    };
  },
  created() {
    setInterval(() => {
      this.value1 = 100 * Math.random();
      this.value1 = 100 * Math.random();
    }, 2000);
  }
};
</script>
```

#### 环形
<progress-circle />



### props

| key         | type    | enum        | requried | default | desc                  |
| ----------- | ------- | ----------- | -------- | ------- | --------------------- |
| value       | Number  | -           | true     | -       | 当前百分比            |
| type        | String  | line/circle | false    | line    | line 条形/circle 圆形 |
| width       | Number  | -           | false    | 120     | 环形的直径            |
| height      | Number  | -           | false    | 18      | 条形高度              |
| textInside  | Boolean | true/false  | false    | false   | 数值是否显示在条上    |
| strokeWidth | Number  | -           | false    | 6       | 圆环宽度（px）        |
| fixed       | Number  | -           | false    | 1       | 保留小数位数          |
| color       | String  | -           | false    | #67c23a | 色值                  |
| bgColor     | String  | -           | false    | #67c23a | 灰色色值              |

### event

| name        | desc                          | args  |
| ----------- | ----------------------------- | ----- |
| on-finished | value 为 100 时，触发完成事件 | value |
