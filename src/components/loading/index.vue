<template>
  <div
    class="c-loading-container"
    v-show="showContainer"
  >
    <Transition
      v-if="wrapper"
      name="c-fade"
    >
      <div
        class="c-loading-wrapper"
        ref="c-loading-window"
        v-show="show"
        :style="{opacity, backgroundColor: color}"
      />
    </Transition>
    <Transition name="c-fade">
      <div
        class="c-loading-window"
        v-show="show"
        :style="{transform: `scale(${scale}) translate(-50%, -50%)`}"
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    </Transition>
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
  name: 'CLoading',
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
      default: '#ccc'
    },
    size: {
      validator(value) {
        switch (typeof value) {
        case 'number':
          return 0 < value;
        case 'string':
          return Object.keys(map).includes(value);
        default:
          return false;
        }
      },
      default: 'normal'
    }
  },
  data() {
    return {
      timer: null,
      showContainer: false
    };
  },
  computed: {
    scale() {
      return 'string' === typeof this.size
        ? map[this.size]
        : this.size;
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
  }
};
</script>

