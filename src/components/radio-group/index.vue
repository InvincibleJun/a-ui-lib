
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'group',
  props: {
    value: String
  },
  methods: {
    input(value) {
      this.$emit('input', value)
    }
  }
}

</script>