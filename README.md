# ui

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### input 

#### props

| key          | type    | enum          | requried | default | desc                       |
| ------------ | ------- | ------------- | -------- | ------- | -------------------------- |
| value        | string  | -             | true     | -       | 表单值,可用v-model双向绑定 |
| disabled     | boolean | true/false    | false    | false   | 是否禁用                   |
| type         | string  | text/textarea | false    | text    | 输入类型                   |
| autocomplete | boolean | true/false    | false    | false   | 是否开启自动完成           |
| readonly     | boolean | true/false    | false    | false   | 是否只读模式               |

#### event

#### slot

### radio

| key   | type          | enum | requried | default | desc                       |
| ----- | ------------- | ---- | -------- | ------- | -------------------------- |
| value | string/number | -    | true     | -       | 表单值,可用v-model双向绑定 |

### radioGroup

| key   | type          | enum | requried | default | desc                       |
| ----- | ------------- | ---- | -------- | ------- | -------------------------- |
| value | string/number | -    | true     | -       | 表单值,可用v-model双向绑定 |
