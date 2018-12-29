<template>
  <div class="c-collapse-item">
    <div class="c-collapse-item-title">
      <slot />
      <span @click="toggle">
        {{ open ? '收缩' : '展开' }}
      </span>
    </div>

    <CCollapaseAnimate>
      <div
        class="c-collapse-item-content"
        v-show="open"
        ref="content"
      >
        <slot name="content" />
      </div>
    </CCollapaseAnimate>
  </div>
</template>

<script>
import CCollapaseAnimate from '../collapse-animate';

let uuid = 0;

export default {
  name: 'CCollapseItem',
  components: { CCollapaseAnimate },
  props: {
    name: {
      type: [String, Number],
      default: () => uuid++
    }
  },

  inject: ['collapse'],

  computed: {
    open() {
      return this.collapse.activeItems.includes(this.name);
    }
  },
  created() {

    //
  },
  methods: {
    toggle() {
      this.$parent.toggle(this);
    }
  }
};
</script>
