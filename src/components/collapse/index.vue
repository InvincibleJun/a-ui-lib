<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { isArray } from "lodash";

export default {
  name: "c-collapse",

  props: {
    value: {
      type: [String, Number, Array],
      default: () => {
        return [];
      }
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      activeItems: []
    };
  },

  provide() {
    return {
      collapse: this
    };
  },

  computed: {
    childs() {
      return this.$children;
    }
  },

  watch: {
    value: {
      immediate: true,
      handler() {
        this.activeItems = isArray(this.value) ? this.value : [this.value];
      }
    }
  },

  methods: {
    toggle(child) {
      if (this.accordion) {
        this.emitEvent(!child.open ? child.name : "");
      } else {
        let value = this.activeItems.slice(0);
        this.$emit(
          "input",
          !child.open
            ? value.concat(child.name)
            : value.filter(v => v !== child.name)
        );
        this.emitEvent(!child.open ? child.name : "");
      }
    },
    emitEvent(value) {
      this.$emit("input", value);
      this.$emit("on-change", value);
    }
  }
};
</script>
