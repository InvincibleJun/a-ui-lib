<template>
  <transition name="modal-fade">
    <div class="c-modal-wrapper" v-if="visible" @click.self="close" :style="style">
      <div class="c-modal">
        <div class="c-modal-title" v-if="$slots.head">
          <slot name="head"></slot>
        </div>
        <div class="c-modal-title" v-else-if="title">
          <span class="c-modal-title">{{title}}</span>
        </div>

        <slot></slot>
        <div v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
        <div v-else>
          <button @click="handlerClickOk">{{okText}}</button>
          <button @click="handlerClickCancel">{{cancelText}}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import msk from "../../mixins/msk";

export default {
  mixins: [msk],
  props: {
    value: {
      type: Boolean
    },
    title: {
      type: String
    },
    noScroll: {
      type: Boolean,
      default: true
    },
    okText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    style() {
      return {};
    }
  },
  mounted() {
    document.body.appendChild(this.$el);
  },

  methods: {
    close() {
      this.visible = false;
      this.$emit("input", false);
    },
    handlerClickOk(e) {
      this.visible = false;
      this.$emit("on-ok", e);
    },
    handlerClickCancel(e) {
      this.visible = false;
      this.$emit("on-cancel", e);
    }
  },

  watch: {
    value: {
      handler(nv) {
        this.visible = nv;
        if (nv) {
          this.$emit("on-open");
        } else {
          this.$emit("on-close");
        }
      }
    }
    // visible(nv) {
    //   // nv ? this.open() : this.close();
    // }
  }
};
</script>

<style>
.modal-fade-enter,
.modal-fade-enter-active {
  animation: ModalShow 0.3s;
}

.modal-fade-leave-to {
  animation: ModalLeave 0.5s;
}

@keyframes ModalShow {
  from {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes ModalLeave {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}

.c-modal {
  width: 100px;
  height: 100px;
  margin: 200px auto;
  background-color: #fff;
  border-radius: 2px;
}

.c-modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}

.c-model-cover {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  background-color: #000;
}

.c-model-cover-to {
  opacity: 0;
}

.c-model-cover-show {
  transition: opacity 0.5s;
}

.c-model-cover-in {
  animation: model-cover-in 0.5s;
}

.c-model-cover-out {
  animation: model-cover-out 0.5s forwards;
}

@keyframes model-cover-in {
  0% {
    opacity: 0;
  }
}

@keyframes model-cover-out {
  100% {
    opacity: 0;
  }
}
</style>
