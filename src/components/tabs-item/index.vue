<template>
  <div class="c-tabs-item-container" v-if="show">
    <slot></slot>
  </div>
</template>

<script>
import { isUndefined } from "../../utils/func";

let uuid;
export default {
  name: "c-tabs-item",

  data() {
    return {
      width: 0
    };
  },

  props: {
    label: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    show() {
      return this.$parent.active === this.index;
    },

    index() {
      return this.label;
    },

    childIndex() {
      for (let i = 0, l = this.$parent.$children.length; i < l; i++) {
        if (this.$parent.$children[i] === this) {
          return i;
        }
      }
      return ++uuid;
    }
  },

  mounted() {
    // let { width } = this.$el.getBoundingClientRect();
    // this.width = width;
  },

  methods: {
    paneOnClick() {}
  }
};
</script>
