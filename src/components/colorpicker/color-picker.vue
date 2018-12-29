<template>
  <div
    class="c-colorpicker-wrapper"
    ref="wrapper"
    :style="{backgroundColor: hueColor, height: height+'px' }"
  >
    <div class="c-colorpicker-white" />
    <div class="c-colorpicker-black" />
    <span
      ref="cursor"
      class="c-colorpicker-cursor"
      :style="style"
    />
  </div>
</template>

<script>
import drag from '../../utils/drag';

export default {
  props: { color: Object },

  data() {
    return {
      unbind: () => {},
      height: 180,
      hueColor: '',
      left: 0,
      top: 0
    };
  },

  computed: {
    style() {
      return {
        left: `${ this.left }px`,
        top: `${ this.top }px`
      };
    }
  },

  watch: {
    color: {
      handler(nv) {
        this.$nextTick(() => {
          this.init();
        });
        this.hueColor = this.color.getRgb(nv._hue, 100, 100);
      },
      deep: true,
      immediate: true
    }
  },

  mounted() {
    this.unbind = drag(this.$el, this.change);
  },

  destroyed() {
    this.unbind();
  },

  methods: {
    init() {
      const {
        _saturation, _value
      } = this.color;

      const { width } = this.$el.getBoundingClientRect();

      this.left = _saturation / 100 * width;
      this.top = (100 - _value) / 100 * this.height;
    },

    change(e) {
      const {
        width, left, top
      } = this.$el.getBoundingClientRect();

      let tmpLeft = e.clientX - left;

      tmpLeft = Math.max(0, tmpLeft);
      tmpLeft = Math.min(tmpLeft, width);
      this.left = tmpLeft;

      let tmpTop = e.clientY - top;

      tmpTop = Math.max(0, tmpTop);
      tmpTop = Math.min(tmpTop, this.height);
      this.top = tmpTop;

      this.color.set({
        saturation: this.left / width * 100,
        value: 100 - this.top / this.height * 100
      });
    }
  }
};
</script>
