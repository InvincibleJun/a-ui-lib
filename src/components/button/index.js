export default {
  name: 'c-button',

  props: {
    type: String,
    disabled: {
      default: false,
      type: Boolean
    }
  },

  methods: {
    getClassNames() {
      const classArr = ['c-button'];

      if (this.disabled) {
        classArr.push('c-button-is-disabled');
      }

      return classArr;
    },

    handlerClick(e) {
      this.$emit('click', e);
    }
  },

  render(h) {
    return (
      <button
        onClick={this.handlerClick}
        disabled={this.disabled}
        type='button'
        class={this.getClassNames()}
      >
        {this.$slots.default}
      </button>
    );
  }
};
