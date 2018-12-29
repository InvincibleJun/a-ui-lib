export default {
  props: {
    value: [String, Number],
    label: [String, Number]
  },

  name: 'radio',

  data() {
    return { group: null };
  },

  computed: {
    selected() {
      return this.label === (this.inGroup ? this.group.value : this.value);
    },

    radioClassName() {
      return ['c-radio', this.selected ? 'is-checked' : ''];
    },

    inGroup() {
      let parent = this.$parent;

      while (parent) {
        if ('group' !== parent.$options.name) {
          parent = parent.$parent;
        } else {
          this.group = parent;

          return true;
        }
      }

      return false;
    }
  },

  methods: {
    handlerClick() {
      if (this.inGroup) {
        this.group.input(this.label);
      } else {
        this.$emit('input', this.label);
      }
    }
  },

  render() {
    return (
      <label
        role='radios'
        class={this.radioClassName}
        onClick={() => this.handlerClick()}
      >
        <span class='c-raido-selection'>
          <input class='c-radio-input' value={this.label} type='radio' />
        </span>
        <span class='c-radio-text'>{this.$slots.default}</span>
      </label>
    );
  }
};
