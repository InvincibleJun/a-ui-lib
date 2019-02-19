<template>
  <div>
    <!-- <slot name=""></slot> -->
    <input
      @input="handlerInput"
      @change="handlerChange"
      @blur="handlerBlur"
      :value="currentVal"
      :readonly="readonly"
      :class="className"
      :disabled="disabled"
      :autocomplete="autocomplete"
      type="type"
      v-if="type !== 'textarea'"
      @compositionupdate="handlerComposition"
      @compositionstart="handlerComposition"
      @compositionend="handlerComposition"
    >
    <textarea v-else/>
  </div>
</template>

<script>
import event from "@/mixins/events";

export default {
  mixins: [event],
  props: {
    value: { type: [String, Number, Array] },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFormItemChildren: true,

      error: false,
      // eslint-disable-next-line no-undefined
      currentVal:
        this.value === null || this.value === undefined ? "" : this.value
    };
  },

  computed: {
    className() {
      return [
        "c-input",
        this.disabled ? "c-input-disabled" : "",
        this.error ? "c-input-error" : ""
      ];
    }
  },

  watch: {},

  methods: {
    handlerInput(e) {
      const { value } = e.target;

      this.setValue(value);
      this.$emit("input", value);
    },

    handlerChange(e) {
      const { value } = e.target;

      this.$emit("change", value);

      this.dispatch("c-form-item", "handler", "change", value);
    },

    handlerBlur(e) {
      const { value } = e.target;

      this.$emit("blur", value);

      this.dispatch("c-form-item", "handler", "blur", value);
    },

    handlerComposition() {
      //
    },

    handlerFocus() {
      this.$parent.handler("change", value);
      //
    },

    reset(value) {
      this.error = false;
      this.setValue(value);
    },

    setValue(value) {
      this.currentVal = value;
    },

    handlerError() {
      this.error = true;
    },

    handlerVaildate() {
      this.error = false;
    }
  }
};
</script>
