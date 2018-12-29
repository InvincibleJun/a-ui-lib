# Button 按钮

```
    <c-button @click="c" :disabled="true">aa</c-button>
```

### props

| key           | type    | enum       | requried | default | desc     |
| ------------- | ------- | ---------- | -------- | ------- | -------- |
| disabled      | Boolean | true/false | false    | false   | 是否禁用 |
| default-color | String  | -          | false    | -       | 默认颜色 |

### events

| name  | desc         | args |
| ----- | ------------ | ---- |
| click | 触发点击事件 | e    |

