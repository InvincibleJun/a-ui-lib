<template>
  <div>
    <ul>
      <li v-for="f in list" :key="f.key"></li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$parent.list;
    }
  }
};
</script>
