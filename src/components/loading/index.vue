<template>
  <div class="c-loading-container" v-show="showContainer">
    <transition v-if="wrapper" name="c-fade">
      <div class="c-loading-wrapper" ref="c-loading-window" v-show="show" :style="{opacity, backgroundColor: color}" />
    </transition>
    <transition name="c-fade">
      <div class="c-loading-window" v-show="show" :style="{transform: `scale(${scale}) translate(-50%, -50%)`}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </transition>
  </div>
</template>

<script>
const map = {
  big: 1.2,
  normal: 1,
  small: 0.8,
  mini: 0.5
};

export default {
  name: "c-loading",
  data() {
    return {
      timer: null,
      showContainer: false
    };
  },
  computed: {
    scale() {
      return typeof this.size === "string" ? map[this.size] : this.size;
    }
  },
  watch: {
    show: {
      immediate: true,
      handler(nv) {
        if (nv) {
          clearTimeout(this.timer);
          this.showContainer = true;
        } else {
          this.timer = setTimeout(() => {
            this.showContainer = false;
          }, 0.5);
        }
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Number,
      default: 0.2
    },
    wrapper: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#ccc"
    },
    size: {
      validator: function(value) {
        switch (typeof value) {
          case "number":
            return number > 0;
          case "string":
            return Object.keys(map).includes(value);
          default:
            return false;
        }
      },
      default: "normal"
    }
  }
};
</script>

