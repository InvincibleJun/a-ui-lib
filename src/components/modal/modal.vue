<template>
  <transition name="modal-fade">
    <div class="c-modal-wrapper" v-if="visible" @click.self="close" :style="style">
      <div class="c-modal">
        <slot name="head">
          <span>12312</span>
        </slot>
        <slot name="body"></slot>
        <div v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import msk from '../../mixins/msk'

export default {
  mixins: [msk],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
   bodyNoScroll: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style() {
      return {}
    }
  },
  methods: {
    close() {
      this.$emit('update:visible', false)
    }
  },
  mounted () {
    document.body.appendChild(this.$el)
  }
}

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
</style>
