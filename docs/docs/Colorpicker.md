# colorpicker 颜色选择器

### props

| key      | type    | enum                 | requried | default  | desc                                |
| -------- | ------- | -------------------- | -------- | -------- | ----------------------------------- |
| value    | String  | -                    | true     | 空字符串 | 支持 rgb/rgba/hex 色彩,可用 v-model |
| alpha    | Boolean | true/false           | true     | false    | 是否显示透明度, 仅支持 rgba 色彩    |
| format   | String  | rgb/rgba/hex/hsl/hsv | false    | hex      | 输出颜色                            |
| editable | Boolean | true/false           | false    | true     | 是否允许输入颜色                    |

### events

| name      | desc         | args       |
| --------- | ------------ | ---------- |
| on-change | 确定回调     | color 色值 |
| on-open   | 打开颜色弹窗 | -          |
| on-close  | 关闭颜色弹窗 | -          |
