<template>
  <div class="c-colorpicker-alapha">
    <div :style="style"></div>
    <span :style="{left: left + 'px'}"></span>
  </div>
</template>

<script>
import drag from "../../utils/drag";

export default {
  data() {
    return {
      unbind: () => {},
      left: 0
    };
  },

  props: {
    color: Object
  },

  computed: {
    style() {
      let { r, g, b } = this.color.getRgb();
      return {
        background: `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgb(${r}, ${g}, ${b}) 100%)`
      };
    }
  },

  methods: {
    init() {
      let { left, width } = this.$el.getBoundingClientRect();
      this.left = (this.color._alpha / 100) * width;
    },

    change(e) {
      let { width, left, top } = this.$el.getBoundingClientRect();
      let tmpLeft = e.clientX - left;
      tmpLeft = Math.min(width, tmpLeft);
      tmpLeft = Math.max(0, tmpLeft);

      this.left = tmpLeft;
      let alpha = Math.round((this.left / width) * 100);
      this.color.set("alpha", alpha);
    }
  },

  watch: {
    "$parent.show"(nv) {
      if (nv) {
        this.$nextTick(() => {
          this.init();
        });
      }
    }
  },

  mounted() {
    this.unbind = drag(this.$el, this.change);
  },

  destroyed() {
    this.unbind();
  }
};
</script>
