### props

| key           | type     | enum               | requried | default | desc                   |
| ------------- | -------- | ------------------ | -------- | ------- | ---------------------- |
| action        | string   | -                  | true     | -       | 上传地址               |
| expect        | string   | imgage/music/video | false    | -       | 允许上传的文件类型     |
| headers       | object   | -                  | false    | {}      | 附加 headers           |
| data          | object   | -                  | false    | {}      | 附加 post 参数         |
| drag          | boolean  | true/false         | treu     | false   | 是否支持拖拽上传       |
| multiple      | boolean  | true/false         | false    | false   | 是否支持多文件上传     |
| show-list     | boolean  | true/false         | false    | true    | 展示上传结果列表       |
| custom-upload | function | -                  | false    | -       | 自定义上传函数         |
| with-cookie   | boolean  | true/false         | false    | false   | 是否携带 cookie        |
| auto-upload   | boolean  | true/false         | false    | true    | 自动上传               |
| chip          | false    | true/ false        | false    | true    | 是否切片上传           |
| chip-size     | Number   | -                  | false    | 50      | 切片大小(M),需设置chip |
| max-size      | number   | -                  | false    | 20      | 文件最大值(size)       |

### event

### slot
| key | desc | required |
| - | - | - |
| trigger | 触发元素 | false | 