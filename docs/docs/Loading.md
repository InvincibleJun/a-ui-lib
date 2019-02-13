# Loading 等待

### example

<loading-index />

```
    <c-loading :show="true" ></c-loading>
```

### props

| key     | type    | enum                  | requried | default | desc           |
| ------- | ------- | --------------------- | -------- | ------- | -------------- |
| show    | Boolean | true/false            | true     | -       | 是否显示       |
| wrapper | Boolean | true/false            | false    | true    | 是否显示遮罩层 |
| opacity | Number  | -                     | false    | 0.2     | 遮罩层透明度   |
| color   | String  | -                     | false    | #333    | 遮罩层背景色   |
| size    | String  | big/normal/small/mini | false    | normal  | 尺寸           |
