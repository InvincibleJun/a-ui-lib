// 色域空间 取值范围为0°～360°，从红色开始按逆时针方向计算，红色为0°，绿色为120°,蓝色为240°。它们的补色是：黄色为60°，青色为180°,品红为300°
// 参考：https://baike.baidu.com/item/HSV/547122?fr=aladdin&fromid=12630604&fromtitle=HSV%E9%A2%9C%E8%89%B2%E7%A9%BA%E9%97%B4
<template>
  <div class="c-colorpicker-hue">
    <span class="c-colorpicker-hue-cursor" :style="{top: top + 'px'}"></span>
  </div>
</template>

<script>
import drag from './drag'

export default {
  data() {
    return {
      top: 0,
    }
  },

  props: {
    color: Object,
  },

  methods: {

    initTop() {
      let { _hue } = this.color
      let { height } = this.$el.getBoundingClientRect()

      this.top = _hue / 360 * height
      // this.color.hueColor()
    },

    change(e) {
      let { height, top } = this.$el.getBoundingClientRect()
      let tmp = e.clientY - top;
      tmp = Math.min(tmp, height);
      tmp = Math.max(0, tmp);
      this.top = tmp;
      this.color.set(
        'hue', Math.round(this.top / height * 360)
      )
      // console.log(this.color)
      // this.color.hueColor()
    }
    
  },

  mounted() {
    drag(this.$el, this.change)

    this.initTop();
  }
}
</script>
