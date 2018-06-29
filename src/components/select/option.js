export default {
  data() {},

  props: {
    value: {
      type: [Number, String],
      required: true
    },

    label: {
      type: String,
      required: true
    }
  },

  methods: {
    selected() {
      console.log(this.value)
    }
  },

  render() {
    const { label } = this
    return (
      <div class="c-select-option" onClick={this.selected}>
        {label}
      </div>
    )
  }
}
