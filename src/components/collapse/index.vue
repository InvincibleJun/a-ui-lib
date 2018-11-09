<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "c-collapse",
  props: {
    accordion: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    childs() {
      return this.$children;
    }
  },
  methods: {
    toggle(child) {
      if (this.accordion && child.open) {
        this.childs.forEach(c => {
          if (c !== child) {
            c.close()
          }
        });
      }

      // console.log(this.childs)
      // const find = this.childs.find(v => child);
      // console.log(find);
      // console.log(child.open);
    }
  },
  created() {
    if (this.accordion) {
      this.$children.forEach(c => c.open = false)
    }
  }
};
</script>
