<template>
  <li :class="classNames">
    <slot></slot>
  </li>
</template>

<script>
export default {
  data () {
    return {
      active: -1
    }
  },
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
    classNames() {
      return [
        'c-dropdown-item',
        this.disabled ? 'c-dropdown-item-disabled' : '',
        this.active ? 'c-dropdown-item-active' : '',
      ]
    }
  },
  methods: {
    handlerClick() {
      // this.$parent.
    },
  },
  watch:{
    active(nV, oV) {
      debugger
    }
  },
  created() {
    this.active = this.$parent.active
  },
  methods: {}
}
</script>
