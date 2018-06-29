<template>
  <div>
    <!-- <slot name=""></slot> -->
    <input :readonly="readonly" :class="className" :disabled="disabled" :autocomplete="autocomplete" type="type" v-if="type !== 'textarea' " />

    <textarea v-else />
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: [String,Number, Array]
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handlerFocus() {},
    setValue() {}
  },

  computed: {
    className() {
      return ['c-input', this.disabled ? 'c-input-disabled' : '']
    }
  },

  watch: {
    value(nV, oV) {
      this.setValue(value);
    }
  }
}

</script>