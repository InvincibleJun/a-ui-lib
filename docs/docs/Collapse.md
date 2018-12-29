# Collapse 折叠面板


### example

```
    <c-collapse style="width: 300px" v-model="value" :accordion="true">
      <c-collapse-item name="1">
        1
        <p slot="content">一</p>
      </c-collapse-item>
      <c-collapse-item name="2">
         2
        <p slot="content">二</p>
      </c-collapse-item>
      <c-collapse-item name="3">
          3
        <div slot="content">
        三
        </div>
      </c-collapse-item>
    </c-collapse>
```

### props

#### collapse

| key       | type                | enum       | requried | default | desc                       |
| --------- | ------------------- | ---------- | -------- | ------- | -------------------------- |
| value     | String/Number/Array | -          | false    | -       | 当前展开 name,支持 v-model |
| accordion | Boolean             | true/false | false    | false   | 手风琴模式                 |

#### collapse-item

| key | type | enum | requried | default | desc |
| --- | ---- | ---- | -------- | ------- | ---- |


### event

| name      | desc               | 参数                    |
| --------- | ------------------ | ----------------------- |
| on-change | 触发收缩展开后调用 | value(变化之后的 value) |

