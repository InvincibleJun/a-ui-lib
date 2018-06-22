<template>
  <div @click="open" @mouseleave="hide" @mouseenter="clearTimer" @keyup="keyup" class="c-dropdown" tabindex="0">
    <slot></slot>
    <transition name="modal-fade">
      <ul class="c-dropdown-menu">
        <slot name="menu" v-if="show"></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
// import { debounce } from '@/utils/func';
let timer

export default {
  data() {
    return {
      timer: null,
      show: false,
      active: -1
    }
  },

  props: {
    trigger: String,
    timeout: {
      type: Number,
      default: 500
    }
  },
  methods: {
    hide() {
      this.clearTimer()
      timer = setTimeout(() => {
        this.show = false
      }, this.timeout)
    },
    clearTimer() {
      clearTimeout(timer)
    },
    keyup(e) {
      if (this.active === -1) {}

      if (e.keyCode === 38) {
      } else if (e.keyCode === 40){

      }
    },
    open() {
      this.show = true
      // timer = setTimeout()
    }
  }
}
</script>
