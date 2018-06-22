import DatePicker from './datepicker'

export default {
  data() {
    return {
      dateValue: ''
    }
  },

  props: {
    value: {
      type: [String, Object],
      defalut: ''
    }
  },

  methods: {
    formate() {}
  },

  watch: {
    value(nV) {
      if (typeof nV === 'string') {
        let d = new Date(nV)
        if (d.toString() === 'Invalid Date') {
          this.inputValue = ''
        } else {
          this.inputValue = this.formate(nV)
        }
      }
    }
  },

  render() {
    return (
      <div class="c-datepicker-wrapper">
        <input value={this.inputValue} />
        <DatePicker value={this.value} />
      </div>
    )
  }
}
