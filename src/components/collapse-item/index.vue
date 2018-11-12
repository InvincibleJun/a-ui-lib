<template>
  <div class="c-collapse-item">
    <div class="c-collapse-item-title">
      <slot></slot>
      <span @click="toggle">{{this.open ? '收缩' : '展开'}}</span>
    </div>
   
    <c-collapase-animate>
      <div class="c-collapse-item-content" v-show="open" ref="content">
        <slot name="content"></slot>
      </div>
    </c-collapase-animate>
  </div>
</template>

<script>
import CCollapaseAnimate from "../collapse-animate";

let uuid = 0;

export default {
  name: "c-collapse-item",
  data() {
    return {
      // open: true
    };
  },
  components: {
    CCollapaseAnimate
  },
  props: {
    name: {
      type: [String, Number],
      default: () => {
        return uuid++;
      }
    }
  },

  inject: ["collapse"],

  computed: {
    open() {
      return this.collapse.activeItems.includes(this.name);
    }
  },
  methods: {
    toggle() {
      this.$parent.toggle(this);
    }
  },
  created() {}
};
</script>
