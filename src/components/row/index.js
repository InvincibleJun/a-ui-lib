import { oneOf } from '../../utils/func';

export default {
  name: 'CRow',

  props: {
    gutter: {
      type: Number,
      default: 16
    },
    type: String,
    justify: {
      validator: value => oneOf(['flex-start', 'flex-end', 'center', 'space-around', 'space-between'],
        value),
      type: String
    },
    align: {
      validator: value => oneOf(['center', 'flex-start', 'flex-end'], value),
      type: String
    },
    className: { type: [String, Array] }
  },

  methods: {
    getClassName() {
      let classList = ['c-row'];

      if (this.type === 'flex') {
        classList.push('c-row-flex');
        // eslint-disable-next-line no-unused-expressions
        this.justify && classList.push(`c-row-justify-${ this.justify }`);
        // eslint-disable-next-line no-unused-expressions
        this.align && classList.push(`c-row-items-${ this.align }`);   
      } 
      // eslint-disable-next-line no-unused-expressions
      typeof this.className === 'string'
      ? classList.push(this.className)
      : classList = classList.concat(this.className);

      return classList.join(' ');
    },

    getStyle() {
      const styleObj = {};

      if (this.gutter) {
        styleObj.marginLeft = styleObj.marginRight = `${ -this.gutter / 2 }px`;
      }

      return styleObj;
    }
  },

  render() {
    return (
      <div class={this.getClassName()} style={this.getStyle()}>
        {this.$slots.default}
      </div>
    );
  }
};
