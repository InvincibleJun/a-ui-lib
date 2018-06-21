export default {
  props: {
    position: {
      type: String,
      default: 'top'
    },

    type: String
  },

  methods: {
    container() {
      let classNames = []
      // if (position === 'top') {}
      return <div class={`c-tabs-conatiner-${this.position}`} />
    }
  },

  render() {
    return <div>{this.container()}</div>
  }
}
