# Modal 弹窗

<modal-index />

### props

| key         | type    | enum | requried | default | desc                    |
| ----------- | ------- | ---- | -------- | ------- | ----------------------- |
| title       | String  | -    | false    | -       | 弹窗头部                |
| value       | Boolean | -    | true     | -       | 控制弹窗显示 true/false |
| no-scroll   | Boolean | -    | false    | true    | 弹窗时禁止 body 滚动    |
| ok-text     | String  | -    | false    | '确认'  | 确认按钮文本            |
| cancel-text | String  | -    | false    | '取消'  | 取消按钮文本            |

### slots

| key    | desc     |
| ------ | -------- |
| head   | 头部区域 |
| footer | 底部区域 |

### events

| name      | desc         | args |
| --------- | ------------ | ---- |
| on-ok     | 点击确定按钮 | e    |
| on-cancel | 点击取消按钮 | e    |
| on-close  | 关闭时       | e    |
| on-open   | 打开时       | e    |
