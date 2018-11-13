<template>
  <div style="width: 340px; height: 180px;">

    <div :style="style" class="c-colorpicker-toggle c-colorpicker-none" @click="show=true" />

    <transition name="c-zoom-in-top" @enter="enter">
      <div v-if="show">
        <!-- hue色彩选择 -->
        <hue-picker :color="color" ref="color" />

        <!-- 颜色选择 -->
        <color-picker :color="color" />

        <!-- 透明 -->
        <alpha-picker v-if="alpha" :color="color"></alpha-picker>

        <input v-model="colorValue" />
        <button @click="ok">确定</button>
        <button @click="quit">取消</button>
      </div>
    </transition>
  </div>
</template>

<script>
import Color from "./color";
import AlphaPicker from "./alpha-picker";
import HuePicker from "./hue-picker";
import ColorPicker from "./color-picker";
import drag from "./drag";

export default {
  name: "c-colorpicker",
  data() {
    return {
      show: false,
      colorBg: "rgb(255,255,255)",
      hueTop: 0,
      eleLeft: 0,
      //
      curLeft: 0,
      curTop: 0,
      color: null
    };
  },

  components: {
    AlphaPicker,
    HuePicker,
    ColorPicker
  },

  props: {
    value: {
      type: String,
      require: true
    },
    alpha: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: "hex"
    }
  },

  methods: {
    quit() {
      this.color.init(this.value);
      this.show = false;
    },

    ok() {
      this.$emit("input", this.colorValue);
    },

    enter() {
      this.color.init(this.colorValue);
    },

    init() {}
  },

  computed: {
    style() {
      return this.value ? { background: this.color.getRgbString() } : {} 
    },
    colorValue() {
      return this.color.getRgbString();
    }
  },

  mounted() {},

  watch: {
    value: {
      handler(nV) {
        if (!this.color) {
          this.color = new Color({
            showAlpha: this.alpha,
            format: this.format
          });
        }
        this.color.init(nV);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">
.c-zoom-in-top-enter-active,
.c-zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}

.c-zoom-in-top-enter,
.c-zoom-in-top-leave-active {
  opacity: 0;
  transform: scaleY(0);
}

.c-colorpicker-toggle {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  position: relative;
  &.c-colorpicker-none {
    border-style: dashed;
  }
  &.c-colorpicker-none:after{
    content: 'x';
    color: '#ccc';
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
  }
}


.c-colorpicker-wrapper {
  margin: 20px;
  position: relative;
  width: 280px;
  height: 180px;
}

.c-colorpicker-white {
  // #fff => 透明
  background: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
}

.c-colorpicker-black {
  // #000 => 透明
  background: linear-gradient(0deg, #000, transparent);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
}

.c-colorpicker-cursor {
  position: absolute;
  top: 0px;
  left: 280px;
  width: 6px;
  height: 6px;
  box-sizing: border-box;
  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3),
    0 0 1px 2px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.c-colorpicker-hue {
  position: relative;
  float: right;
  height: 180px;
  width: 10px;
  background: linear-gradient(
    180deg,
    red 0,
    #ff0 17%,
    lime 33%,
    cyan 50%,
    blue 67%,
    #f0f 83%,
    red
  );
}
.c-colorpicker-hue-cursor {
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 4px;
  border-radius: 2px;
  background-color: #ccc;
  // z-index: 1;
  transform: translate(-2px, -50%);
}
.c-colorpicker-alapha {
  position: relative;
  height: 12px;
  width: 280px;
  margin: 20px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg);
  div {
    height: 12px;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 14px;
    transform: translate(-2px, -2px);
    background-color: #ccc;
  }
}
</style>
