# 布局

<layout />

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
