<template>
  <transition name="c-slide" @enter="enter">
    <div class="c-notification-box">
      <render-content v-if="render" :renderFunc="render"/>
      <div class="c-notification-title" v-if="title">{{title}}</div>
      <div class="c-notification-content">{{content}}</div>
    </div>
  </transition>
</template>

<script>
import renderContent from "./render-content";

export default {
  components: {
    renderContent
  },

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
      default: 2000
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    uuid: {
      type: Number,
      required: true
    },
    render: {
      type: Function
    }
  },

  data() {
    return {
      timer: null
    };
  },

  methods: {
    reset() {
      clearTimeout(this.timer);
    },
    enter() {
      // debugger;
    }
  },

  mounted() {
    if (this.autoClose) {
      this.timer = setTimeout(() => {
        this.$parent.remove(this.uuid);
      }, this.duration);
    }
  },

  destroyed() {
    this.reset();
  }
};
</script>

