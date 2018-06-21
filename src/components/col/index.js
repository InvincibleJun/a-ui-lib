export default {
  props: {
    spans: {
      type: Number,
      default: 24
    },
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number
  },

  methods: {
    getStyle() {
      let width = this.$parent.gutter
      return width
        ? { paddingLeft: width / 2 + 'px', paddingRight: width / 2 + 'px' }
        : {}
    },

    getClassName() {
      let classArr = ['c-col', `c-col-${this.spans}`]

      if (this.offset) {
        classArr.push(`c-col-offset-${this.offset}`)
      }

      ;['xs', 'sm', 'md', 'lg', 'xl'].forEach(s => {
        if (this[s]) {
          classArr.push(`c-col-${s}-${this[s]}`)
        }
      })

      return classArr.join(' ')
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
