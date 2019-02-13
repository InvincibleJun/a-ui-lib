<template>
  <div
    @click="open"
    @mouseleave="hide"
    @mouseenter="clearTimer"
    @keydown="keydown"
    class="c-dropdown"
    tabindex="0"
  >
    <slot/>

    <Transition name="modal-fade">
      <ul class="c-dropdown-menu" :style="style" v-if="show">
        <slot name="menu"/>
        <!-- <div class=""></div> -->
      </ul>
    </Transition>
  </div>
</template>

<script>
import { addEvent, checkInComponent } from "../../utils/dom";

let timer;

export default {
  name: "CDropdown",

  props: {
    autoHide: {
      type: Boolean,
      default: false
    },
    trigger: String,
    timeout: {
      type: Number,
      default: 500
    }
  },

  data() {
    return {
      timer: null,
      show: false,
      active: -1,
      // eslint-disable-next-line no-empty-function
      unbind: () => {},
      left: 0,
      top: 0,
      height: 0
    };
  },

  computed: {
    style() {
      return {
        left: `${this.left}px`,
        top: `${this.top + this.height}px`
      };
    },
    children() {
      return this.$children.filter(v => v.disabled === false);
    },
    count() {
      return this.children.length;
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    show(nv, ov) {
      // console.log(nv);
    }
  },

  mounted() {
    const { left, top, height } = this.$el.getBoundingClientRect();

    this.left = left;
    this.top = top;
    this.height = height;
  },
  destroyed() {
    this.unbind();
  },

  methods: {
    setActive(index) {
      this.active = index;
    },
    select(value) {
      this.$emit("select", value);
    },
    hide() {
      if (this.autoHide) {
        this.clearTimer();
        timer = setTimeout(() => {
          this.show = false;
        }, this.timeout);
      }
    },
    clearTimer() {
      clearTimeout(timer);
    },
    keydown(e) {
      if (this.active === -1) {
        //
      }

      if (e.keyCode === 38) {
        e.preventDefault();
        this.active = this.active <= 0 ? this.count - 1 : this.active - 1;
      } else if (e.keyCode === 40) {
        e.preventDefault();
        this.active = this.active === this.count - 1 ? 0 : this.active + 1;
      } else if (e.keyCode === 13) {
        this.children[this.active].handlerClick();
        this.reset();
      }
    },
    open() {
      if (this.show) {
        this.reset();
      } else {
        this.$nextTick(() => {
          this.unbind = addEvent(document.body, "click", e => {
            e.preventDefault();

            // 检测点击范围
            if (!checkInComponent(e.target, this.$el)) {
              this.reset();
            }
          });
        });
        this.show = true;
      }
    },

    reset() {
      this.show = false;
      this.unbind && this.unbind();
    }
  }
};
</script>
