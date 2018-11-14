<template>
  <div style="width: 340px; height: 180px;">

    <div :style="style" :class="blockClass" @click="toggle" />

    <transition name="c-zoom-in-top" @enter="enter">
      <div v-show="show">
        <!-- hue色彩选择 -->
        <hue-picker :color="color" ref="color" />

        <!-- 颜色选择 -->
        <color-picker :color="color" />

        <!-- 透明 -->
        <alpha-picker v-if="alpha" :color="color"></alpha-picker>
        <input v-model="inputValue" @blur="inputHanlderBlur" v-if="editable" />
        <div v-else>{{inputValue}}</div>
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
import { isColor } from "../../utils/valid-prop";

export default {
  name: "c-colorpicker",
  data() {
    return {
      show: false,
      color: null,
      inputValue: ""
    };
  },

  components: {
    AlphaPicker,
    HuePicker,
    ColorPicker
  },

  props: {
    editable: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      require: true
    },
    alpha: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: "hex"
    }
  },

  methods: {
    toggle() {
      this.show = !this.show;
    },
    quit() {
      this.color.init(this.value);
      this.show = false;
    },

    ok() {
      this.$emit("input", this.colorValue);
      this.$emit("on-change", this.colorValue);
      this.show = false;
    },

    enter() {
      this.color.init(this.value);
    },

    inputHanlderBlur(e) {
      this.color.init(e.target.value);
      this.$nextTick(() => {
        if (this.color.initValue) {
          this.inputValue = this.colorValue;
        }
      });
    }
  },

  computed: {
    blockClass() {
      return (
        "c-colorpicker-toggle" +
        (this.value || this.show ? "" : " c-colorpicker-none")
      );
    },
    style() {
      return {
        background: this.show ? this.colorValue : this.value
      };
    },
    colorValue() {
      return this.color && this.color.getColorString();
    }
  },

  created() {
    this.color = new Color({
      alpha: this.alpha,
      format: this.format,
      defaultColor: this.defaultColor
    });
  },

  watch: {
    show(nv) {
      this.$emit(nv ? "on-open" : "on-close");
    },
    value: {
      handler(nv) {
        this.color && this.color.init(nv);
      }
    },
    colorValue: {
      handler(nv) {
        this.inputValue = this.colorValue;
      }
    }
  }
};
</script>
