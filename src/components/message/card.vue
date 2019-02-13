<template>
  <div>
    <div class="c-message-title" v-if="title">{{title}}</div>
    <div class="c-message-content">{{content}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 1000
    },
    render: {
      type: Function
      // default: () => {}
    }
  },

  methods: {}
};
</script>

