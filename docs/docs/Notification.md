# Notification 全局通知

<notification-index />

## 示例

### 手动关闭

```
<script>
export default {
  data() {
    return {
      info: null
    }
  },
  methods: {
    info() {
      this.info = this.$Notify.info('success')
    },
    close() {
      this.info.close();
    }
  },
}
</script>
```

### props

| key       | type     | enum                       | requried | default  | desc     |
| --------- | -------- | -------------------------- | -------- | -------- | -------- |
| title     | String   | -                          | false    | 空字符串 | 通知头部 |
| content   | String   | -                          | false    | 空字符串 | 通知内容 |
| render    | function | -                          | false    | null     | 渲染函数 |
| duration  | Number   | -                          | false    | 2000     | 消失时间 |
| autoClose | Boolean  | -                          | false    | true     | 自动关闭 |
| type      | 消息类型 | success/info/warning/error | false    | info     | 通知类型 |

### 全局配置

```
this.$Message.config({
  duration: 2000
})
```

| key      | type   | emum | requried | default | desc                          |
| -------- | ------ | ---- | -------- | ------- | ----------------------------- |
| duration | Number | -    | false    | 2000    | 全局超时时间,优先级低于 props |
