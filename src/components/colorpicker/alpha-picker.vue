<template>
  <div class="c-colorpicker-alapha">
    <div :style="style"></div>
    <span :style="{left: left + 'px'}"></span>
  </div>
</template>

<script>
import drag from './drag'

export default {
  data() {
    return {
      left: 0
    }
  },

  props: {
    color: Object
  },

  computed: {
    style() {
      let { r, g, b } = this.color.get()
      return {background: `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgb(${r}, ${g}, ${b}) 100%)`}
    }
  },

  methods: {
    
    change(e) {
      let { width, height, left, top } = this.$el.getBoundingClientRect()
      let tmpLeft = e.clientX - left;
      tmpLeft = Math.min(width, tmpLeft)
      tmpLeft = Math.max(0, tmpLeft); 
      
      this.left = tmpLeft;     
      let alpha = Math.round(this.left / width * 100)
      this.color.set('alpha', alpha)
    }
  },
  
  mounted() {
    drag(this.$el, this.change)
  }
}
</script>
