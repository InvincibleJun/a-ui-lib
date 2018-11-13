<template>
  <div class="c-colorpicker-wrapper" ref="wrapper" :style="{backgroundColor: hueColor }">
    <div class="c-colorpicker-white"></div>
    <div class="c-colorpicker-black"></div>
    <span ref="cursor" class="c-colorpicker-cursor" :style="style"></span>
  </div>
</template>

<script>
import drag from './drag'

export default {
  props: {
    color: Object
  },

  computed: {
    // hueColor () {
    //   return this.color.hueColor
    // },

    style() {
      return {
        left: this.left + 'px',
        top: this.top + 'px'
      }
    },
  },

  data () {
    return {
      hueColor: '',
      left: 0,
      top: 0
    }
  },

  methods: {

    init() {
      const { _saturation, _value } = this.color
      const { width, height } = this.$el.getBoundingClientRect()
      this.left = _saturation / 100 * width
      this.top = (100 - _value) / 100 * height
    },

    change(e) {
      let { width, height, left, top} = this.$el.getBoundingClientRect()
      let tmpLeft = e.clientX - left;
      tmpLeft = Math.max(0, tmpLeft)
      tmpLeft = Math.min(tmpLeft, width)
      this.left = tmpLeft;
      
      let tmpTop= e.clientY - top;
      tmpTop = Math.max(0, tmpTop)
      tmpTop = Math.min(tmpTop, height)
      this.top = tmpTop;

      this.color.set({
        saturation: this.left / width * 100,
        value: 100 - this.top / height * 100
      })
    }
  },

  mounted() { 
    drag(this.$el, this.change)
  },

  watch: {
    'color._hue': {
      handler(nv){
        this.hueColor = this.color.getRgbString(nv, 100, 100)
      },
      immediate: true
    }
  }
}
</script>
