<template>
  <div @click="open" @mouseleave="hide" @mouseenter="clearTimer" @keyup="keyup" class="c-dropdown" tabindex="0">
    <slot></slot>

    <transition name="modal-fade">
      <ul class="c-dropdown-menu" :style="style" v-if="show">
        <slot name="menu"></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
import { addEvent, checkInComponent} from '../../utils/dom'
// import dropdownItem from './dropdown-item'

let timer

export default {
  data() {
    return {
      timer: null,
      show: false,
      active: -1,

      left: 0,
      top: 0,
      height: 0
    }
  },

  props: {
    autoHide: {
      type: Boolean,
      default: false
    },
    trigger: String,
    timeout: {
      type: Number,
      default: 500
    }
  },

  computed: {
    style() {
      return {
        left: this.left + 'px',
        top: this.top + this.height + 'px'
      }
    }
  },

  mounted() {
    let { left, top, height } = this.$el.getBoundingClientRect()
    this.left = left;
    this.top = top;
    this.height = height
  },

  methods: {
    hide() {
      if (this.autoHide) {
        this.clearTimer()
        timer = setTimeout(() => {
          this.show = false
        }, this.timeout)
      }
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

      if (this.show) {
        this.show = false
        this.unbind();
        
      } else {
        this.$nextTick(() => {
          this.unbind = addEvent(document.body, 'click', (e) => {
            e.preventDefault();
            // 检测点击范围
            if (!checkInComponent(e.target, this.$el)) {
              this.show = false
              this.unbind();
            }
          })
        })
        this.show = true
      }

    },
  },
  watch: {
    show(nv,ov) {
      console.log(nv)
    }
  }
}
</script>
