<template>
  <div class="c-carousel-item c-carousel-item-animated" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scale: 1,
      left: 0,
      width: 0,
      count: 0
    }
  },

  computed: {
    style() {
      const { left, scale } = this
      return {
        width: this.$parent.width  + 'px',
        height: this.$parent.height + 'px',
        msTransform: `translateX(${ left }px) scale(${ scale })`,
        webkitTransform: `translateX(${ left }px) scale(${ scale })`,
        transform: `translateX(${ left }px) scale(${ scale })`
      }
    }
  },

  methods: {
    transform(index, to, now, count) {

      if (now === count - 1 && to === 0) {

        this.left = this.width * index

      } else {

        this.left = this.width * index - to * this.width; 

      }
    },

    init(index) {
      this.left = this.width * index
    }
  },

  created() {
    this.width = this.$parent.width;
  }
}
</script>
