<template>
  <div class="c-loading-container" v-show="showContainer">
    <transition v-if="wrapper" name="c-fade">
      <div class="c-loading-wrapper" ref="c-loading-window" v-show="show" :style="{opacity}" />
    </transition>
    <transition name="c-fade">
      <div class="c-loading-window" v-show="show">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      showContainer: false
    }
  },
  watch: {
    show(nv) {
      if (nv) {
        clearTimeout(this.timer)
        this.showContainer = true
      } else {
        this.timer = setTimeout(() => {
          this.showContainer = false
        }, 0.5)
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
      default: true
    }
  }
}
</script>

<style lang="scss">
.c-fade-enter-active,
.c-fade-leave-active {
  transition: 0.5s ease-in-out;
}

.c-fade-enter,
.c-fade-leave-to {
  opacity: 0 !important;
}

.c-loading-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.c-loading-wrapper {
  @extend .c-loading-container;
  background-color: #ccc;
}

.c-loading-window {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    position: absolute;
    width: 10px;
    height: 10px;
  }
}

$window-childs: ('1', red, top, left), ('2', green, top, right),
  ('3', orange, bottom, left), ('4', grey, bottom, right);

@each $k, $color, $ver, $hoz in $window-childs {
  .c-loading-window span:nth-child(#{$k}) {
    background-color: #{$color};
    animation: c-loading-window-#{$k} 1s infinite;
  }
  @keyframes c-loading-window-#{$k} {
    0% {
      #{$ver}: 0;
      #{$hoz}: 0;
      border-radius: 100%;
      transform: rotate(0);
    }
    80% {
      #{$ver}: 10px;
      #{$hoz}: 10px;
      border-radius: 0;
      transform: rotate(180);
    }
    100% {
      #{$ver}: 0;
      #{$hoz}: 0;
      border-radius: 100%;
      transform: rotate(0);
    }
  }
}
</style>
