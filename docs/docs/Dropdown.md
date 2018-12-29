# Dropdown下拉菜单

### example

```
   <c-dropdown @select="select">选择
      <template slot="menu" >
        <c-dropdown-item value="a">小明1</c-dropdown-item>
        <c-dropdown-item>小明2</c-dropdown-item>
        <c-dropdown-item  value="c">小明3</c-dropdown-item>
      </template>
    </c-dropdown>
```

### props

#### dropdown

| key       | type    | enum       | requried | default | desc                   |
| --------- | ------- | ---------- | -------- | ------- | ---------------------- |
| auto-hide | Boolean | true/false | false    | false   | 是否自动隐藏           |
| timeout   | Number  | -          | false    | 500     | 自动隐藏的超时时间(ms) |

#### dropdown-item

| key   | type          | enum | requried | default | desc               |
| ----- | ------------- | ---- | -------- | ------- | ------------------ |
| value | Number/String | -    | false    | -       | 选中事件触发 value |

### events

#### dropdown

| name   | desc         | args |
| ------ | ------------ | ---- |
| select | 选中选项事件 | e    |

### slots

| key  | desc                         |
| ---- | ---------------------------- |
| menu | 下拉菜单，填入 dropdown-item |
