<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {

      //
    };
  },
  methods: {}
};
</script>

