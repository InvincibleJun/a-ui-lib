# Tooltip 提示框

### example

<tooltip-index />

```
    <c-tooltip content="我是谁？？？" placement="bottom-start">
      <div>点我</div>
    </c-tooltip>

    <c-tooltip placement="bottom-start">
      <div>点我</div>
      <div slot="content">我是谁？？？</div>
    </c-tooltip>
```

### props

| key              | type    | enum                                                                                                     | requried | default               | desc                     |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------------- | -------- | --------------------- | ------------------------ |
| placement        | String  | toptop-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | false    | bottom                | 显示位置                 |
| content          | String  | -                                                                                                        | false    | 空字符串              | 内容区域                 |
| background-color | String  | -                                                                                                        | false    | rgba(70, 76, 91, 0.9) | 背景颜色                 |
| timeout          | Number  | -                                                                                                        | false    | 500                   | 消失等待时间（ms）       |
| delay            | Number  | -                                                                                                        | false    | 200                   | 出现延迟时间（ms）       |
| manual           | Boolean | -                                                                                                        | false    | false                 | mouse 事件不触发显示隐藏 |

### slots

| key     | desc     |
| ------- | -------- |
| content | 内嵌元素 |
