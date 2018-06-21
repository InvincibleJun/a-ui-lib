<template>
  <div @click="open" @mouseleave="hide" @mouseenter="clearTimer" @keydown="keydown">
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
      show: false
    }
  },

  props: {
    trigger: String,
    timeout: {
      type: Number,
      default: 2000
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
    keydown() {
      debugger
    },
    open() {
      this.show = true
      // timer = setTimeout()
    }
  }
}
</script>
