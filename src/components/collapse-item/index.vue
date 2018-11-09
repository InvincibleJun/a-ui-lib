<template>
  <div class="c-collapse-item">
    <div class="c-collapse-item-title">
      <slot></slot>
      <span @click="toggle">{{this.open ? '收缩' : '展开'}}</span>
    </div>
    <!-- <T> -->
    <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div class="c-collapse-item-content" v-show="open" ref="content">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "c-collapse-item",
  data() {
    return {
      open: true
    };
  },
  computed: {},
  methods: {
    close() {
      this.open = false
    },
    toggle() {
      this.open = !this.open;
      this.$parent.toggle(this)
    },

    beforeEnter(el) {
      el.classList.add("collapse-transition");
      // console.log(el.scrollHeight);
      el.style.height = "0";
    },

    enter(el) {
      // console.log(el.scrollHeight)
      el.style.height = el.scrollHeight + "px";
    },

    afterEnter(el) {
      el.classList.remove("collapse-transition");
      el.style.height = "";
    },

    beforeLeave(el) {
      // if (!el.dataset) el.dataset = {};
      // el.dataset.oldPaddingTop = el.style.paddingTop;
      // el.dataset.oldPaddingBottom = el.style.paddingBottom;
      // el.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },

    leave(el) {
      if (el.scrollHeight !== 0) {
        // for safari: add class after set height, or it will jump to zero height suddenly, weired
        // addClass(el, 'collapse-transition');
        el.classList.add("collapse-transition");

        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },

    afterLeave(el) {
      el.classList.remove("collapse-transition");
      el.style.height = "";
      // el.style.overflow = el.dataset.oldOverflow;
      // el.style.paddingTop = el.dataset.oldPaddingTop;
      // el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  },
  created() {}
};
</script>
