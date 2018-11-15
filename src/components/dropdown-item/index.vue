<template>
  <li :class="classNames" @mouseenter="handlerEnter" @click="handlerClick">
    <slot></slot>
  </li>
</template>

<script>
import { isUndefined } from "../../utils/func";

export default {
  name: "c-dropdown-item",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String]
    }
  },
  computed: {
    index() {
      for (let i = 0, l = this.$parent.$children.length; i < l; i++) {
        if (this.$parent.$children[i] === this) {
          return i;
        }
      }
    },
    isActive() {
      return this.$parent.active === this.index;
    },
    classNames() {
      return [
        "c-dropdown-item",
        this.disabled ? "c-dropdown-item-disabled" : "",
        this.isActive ? "c-dropdown-item-active" : ""
      ];
    }
  },
  methods: {
    handlerEnter() {
      this.$parent.setActive(this.index);
    },
    handlerClick() {
      this.$parent.select(isUndefined(this.value) ? this.index : this.value);
    }
  }
};
</script>
