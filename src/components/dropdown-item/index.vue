<template>
  <li :class="classNames" @mouseenter="handlerEnter" @click="handlerClick">
    <slot/>
  </li>
</template>

<script>
import { isUndefined } from "../../utils/func";

export default {
  name: "CDropdownItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: { type: [Number, String] }
  },
  computed: {
    index() {
      if (this.disabled) {
        return -2;
      }
      let childrens = this.$parent.$children.filter(v => v.disabled === false);
      for (let i = 0, l = childrens.length; i < l; i++) {
        if (childrens[i] === this) {
          // console.log(this.$parent.$children[i].disabled)
          return i;
        }
      }

      return "";
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
      if (!this.disabled) {
        this.$parent.setActive(this.index);
      }
    },
    handlerClick() {
      if (!this.disabled) {
        this.$parent.select(isUndefined(this.value) ? this.index : this.value);
      }
    }
  }
};
</script>
