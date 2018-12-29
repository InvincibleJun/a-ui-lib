<template>
  <div>
    <slot />
  </div>
</template>

<script>

//
export default {
  name: 'Menu',
  props: {
    opens: { type: [String, Array] },
    active: { type: String }
  }

  //
};
</script>

