<template>
  <div>
    <!-- <slot name=""></slot> -->
    <input @input="handlerInput" @change="hanlderChange" :readonly="readonly" :class="className" :disabled="disabled" :autocomplete="autocomplete" type="type" v-if="type !== 'textarea'" @compositionupdate="handlerComposition" @compositionstart="handlerComposition" @compositionend="handlerComposition" />

    <textarea v-else />
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentVal: this.value === null ||  this.value === undefined ? '': this.value
    }
  },
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
    handlerInput(e) {
      const { value }= e.target
      this.setValue(value)
      this.$emit('input', value)
    },

    hanlderChange(e) {
      const { value }= e.target
      this.$emit('change', value)
    },

    handlerComposition() {},
    handlerFocus() {},

    setValue(value) {
      this.currentVal = value
    }
  },

  computed: {
    className() {
      return ['c-input', this.disabled ? 'c-input-disabled' : '']
    },
  },

  watch: {
  }
}

</script>