export default {
  name: 'c-button',

  props: {
    type: String,
    disabled: Boolean
  },

  methods: {
    getClassNames() {
      let classArr = ['c-button']
      if (this.disabled) {
        classArr.push('c-button-is-disabled')
      }
      return classArr
    }
  },

  render() {
    return (
      <button
        disabled={this.disabled}
        type="button"
        class={this.getClassNames()}
      >
        {this.$slots.default}
      </button>
    )
  }
}
