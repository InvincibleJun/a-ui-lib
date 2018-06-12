export default {
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    // line, circle
    type: {
      type: String,
      default: 'line'
    },

    textInside: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    getLineStyle() {
      return { width: this.percentage + '%' }
    },

    getLineClass() {
      let classes = ['c-progress-line-bar']
      !this.textInside && classes.push('c-progress-line-not-inside')
      return classes.join(' ')
    }
  },

  render(h) {
    const { type, textInside, percentage } = this
    if (type === 'line') {
      return (
        <div class="c-progress-line-wrapper">
          <div class={this.getLineClass()}>
            <div class="c-progress-line-percentage" style={this.getLineStyle()}>
              {textInside && (
                <div class="c-progress-text-inside">{percentage}</div>
              )}
            </div>
          </div>
          <div class="c-progress-text">{percentage}%</div>
        </div>
      )
    }
    // return h('div')
  }
}
