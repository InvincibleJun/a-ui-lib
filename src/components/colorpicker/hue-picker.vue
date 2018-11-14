// 色域空间 取值范围为0°～360°，从红色开始按逆时针方向计算，红色为0°，绿色为120°,蓝色为240°。它们的补色是：黄色为60°，青色为180°,品红为300°
// 参考：https://baike.baidu.com/item/HSV/547122?fr=aladdin&fromid=12630604&fromtitle=HSV%E9%A2%9C%E8%89%B2%E7%A9%BA%E9%97%B4
<template>
  <div class="c-colorpicker-hue" :style="{height: height+'px'}">
    <span class="c-colorpicker-hue-cursor" :style="style"></span>
  </div>
</template>

<script>
import drag from "../../utils/drag";

export default {
  data() {
    return {
      unbind: () => {},
      top: 0,
      height: 180
    };
  },

  props: {
    color: Object
  },

  computed: {
    style() {
      return {
        top: this.top + "px"
      };
    }
  },

  methods: {
    initTop() {
      let { _hue } = this.color;
      this.top = (_hue / 360) * this.height;
    },

    change(e) {
      let { top } = this.$el.getBoundingClientRect();
      let tmp = e.clientY - top;
      tmp = Math.min(tmp, this.height);
      tmp = Math.max(0, tmp);
      this.top = tmp;
      this.color.set("hue", Math.round((this.top / this.height) * 360));
    }
  },

  watch: {
    color: {
      handler() {
        this.initTop()
      },
      deep: true
    },
    "$parent.show"(nv) {
      if (nv) {
        this.$nextTick(() => {
          this.initTop();
        });
      }
    }
  },

  mounted() {
    this.unbind = drag(this.$el, this.change);
  },

  destroyed() {
    this.unbind()
  }
};
</script>
