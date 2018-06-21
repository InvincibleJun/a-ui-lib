<template>
  <li class="c-dropdown-item">test</li>
</template>

<script>
export default {
  data () {
    return {
      active: -1
    }
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
