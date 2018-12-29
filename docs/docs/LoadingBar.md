# LoadingBar 加载进度条

### example

组件内调用

```
this.$LoadingBar.start();
```

外部调用

```
import LoadingBar from "../src/components/loading-bar";

LoadingBar.start();
```

### method

| name   | desc | args   |
| ------ | ---- | ------ |
| start  | 开启 | option |
| finish | 完成 | -      |
| error  | 报错 | -      |

### option

| key         | type     | enum       | requried | default | desc               |
| ----------- | -------- | ---------- | -------- | ------- | ------------------ |
| color       | String   | -          | false    | -       | 加载中状态颜色     |
| timeout     | Number   | -          | false    | 15000   | 超时时间           |
| height      | Number   | -          | false    | 2       | 加载条高度         |
| onError     | Function | -          | false    | ()=>{}  | error 回调         |  
