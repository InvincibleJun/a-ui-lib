export default {
  props: {
    gutter: Number,
    type: String,
    justify: String,
    align: String
  },

  methods: {
    getClassName() {
      let classList = ['c-row']
      if (this.type === 'flex') {
        classList.concat([
          'c-row-flex',
          `c-row-justify-${this.justify}`,
          `c-align-items-${this.align}`
        ])
      }
      return classList.join(' ')
    },

    getStyle() {
      let styleObj = {}
      if (this.gutter) {
        styleObj.marginLeft = styleObj.marginRight = -this.gutter / 2 + 'px'
      }
      return styleObj
    }
  },

  render(h) {
    return (
      <div class={this.getClassName()} style={this.getStyle()}>
        {this.$slots.default}
      </div>
    )
  }
}
