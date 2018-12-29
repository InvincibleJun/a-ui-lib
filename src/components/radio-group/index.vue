
<template>
  <div>
    <slot />
  </div>
</template>

<script>

export default {
  name: 'Group',
  props: { value: String },
  methods: {
    input(value) {
      this.$emit('input', value);
    }
  }
};

</script>
