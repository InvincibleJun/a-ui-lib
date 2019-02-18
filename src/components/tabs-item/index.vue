<template>
  <div
    class="c-tabs-item-container"
    v-if="show"
  >
    <slot />
  </div>
</template>

<script>

// import { isUndefined } from '../../utils/func';

let uuid;

export default {
  name: 'CTabsItem',

  props: {
    label: {
      type: [String, Number],
      required: true
    }
  },

  data() {
    return { width: 0 };
  },

  computed: {
    show() {
      return this.$parent.value === this.label;
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

    /*
     * let { width } = this.$el.getBoundingClientRect();
     * this.width = width;
     */
  },

  methods: {
    paneOnClick() {

    // 
    }
  }
};
</script>
