# 布局

## 示例

### 常规栅格布局

<layout-grid />

> code

```
<template>
  <div>
   <Row class-name="line">
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
      <Col :spans="2">
        <div class="col">col-2</div>
      </Col>
    </Row>

    <Row :gutter="16" class="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :offset="4" :spans="4">
        <div class="col">col-8</div>
      </Col>
      <Col :offset="10" :spans="2">
        <div class="col">col-6</div>
      </Col>
    </Row>

    <Row :gutter="16" class="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="8">
        <div class="col">col-8</div>
      </Col>
      <Col :spans="12">
        <div class="col">col-6</div>
      </Col>
    </Row>
  </div>
</template>

<style>
.col {
  background-color: rgba(0, 153, 229, 0.9);
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}

.line {
  margin: 10px;
}
</style>

```

### flex 布局

<layout-flex />

> code

```
<template>
  <div>
    <Row :gutter="16" type="flex" justify="center" class="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
    </Row>
    <Row :gutter="16" type="flex" justify="flex-start" class="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
    </Row>
    <Row :gutter="16" type="flex" justify="space-around" class="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
    </Row>
    <Row :gutter="16" type="flex" justify="space-between" class="line">
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
      <Col :spans="4">
        <div class="col">col-4</div>
      </Col>
    </Row>
  </div>
</template>

<style>
.col {
  background-color: #3eaf7c;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}

.line {
  margin: 10px;
}
</style>
```

### 响应式布局

<layout-responsive />

> code

```
<template>
  <div>
    <Row :gutter="16" class="line">
      <Col :xs="2" :sm="4" :md="6" :lg="8" :xl="4">
        <div class="col">col-4</div>
      </Col>
      <Col :xs="20" :sm="16" :md="12" :lg="8" :xl="16">
        <div class="col">col-16</div>
      </Col>
      <Col :xs="2" :sm="4" :md="6" :lg="8" :xl="4">
        <div class="col">col-4</div>
      </Col>
    </Row>
  </div>
</template>

<style>
.col {
  background-color: #3eaf7c;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}

.line {
  margin: 10px;
}
</style>

```

## Col

### props

| key    | type   | enum | requried | default | desc                       |
| ------ | ------ | ---- | -------- | ------- | -------------------------- |
| spans  | Number | 1-24 | false    | 24      | 单元格数                   |
| offset | NUmber | 1-24 | false    | 无      | 偏移量                     |
| xs     | Number | 1-24 | false    | 无      | xs 尺寸（小于 768px）屏幕  |
| sm     | Number | 1-24 | false    | 无      | sm 尺寸（小于 992px）屏幕  |
| md     | Number | 1-24 | false    | 无      | md 尺寸（小于 1200px）屏幕 |
| lg     | Number | 1-24 | false    | 无      | lg 尺寸（小于 1920px）屏幕 |
| xl     | Number | 1-24 | false    | 无      | xl 尺寸 (大于 1920px) 屏幕 |

## Row

### props

| key        | type   | enum                                                  | requried | default | desc                  |
| ---------- | ------ | ----------------------------------------------------- | -------- | ------- | --------------------- |
| gutter     | Number | -                                                     | false    | 16      | 单元格数              |
| type       | String | flex                                                  | false    | 无      | 启用 flex 布局方式    |
| justify    | String | flex-start flex-end center space-around space-between | false    | 无      | flex 布局水平排列方式 |
| align      | String | center flex-start flex-end                            | false    | 无      | flex 布局垂直排列方式 |
| class-name | array  | string                                                | -        | 无      | 额外的类名            |
