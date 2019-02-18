# Form 表单

<form-index />

### props

> form

| key         | type    | enum | required | default | desc               |
| ----------- | ------- | ---- | -------- | ------- | ------------------ |
| models      | Object  | -    | true     | -       | 原始 form 数据对象 |
| inline      | Boolean | -    | false    | false   | 是否行内显示       |
| label-width | Number  | -    | false    | 80      | label 宽度         |
| rules       | Object  | -    | false    | -       | 表单校验规则       |
| warp        | Boolean | -    | false    | -       | 表头是否换行       |

> form-item

| key          | type    | enum | required | default | desc                                      |
| ------------ | ------- | ---- | -------- | ------- | ----------------------------------------- |
| label        | String  | -    | false    | -       | 表头 label 名                             |
| prop         | String  | -    | false    | -       | 检验配置 key                              |
| show-message | Boolean | -    | false    | true    | 是否显示检验错误信息                      |
| required     | Boolean | -    | false    | false   | 显示必填符号，优先级高于 rule 的 required |
