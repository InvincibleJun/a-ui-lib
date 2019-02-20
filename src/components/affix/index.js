import { addEvent } from '../../utils/dom';

let startIndex = 10000;
export default {
  props: {
    top: {
      type: Number,
      default: 0
    },
    zIndex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      affix: false,
      width: 0,
      height: 0
    };
  },
  computed: {
    box() {
      return this.$refs['affix'];
    },

    placeholder() {
      return this.$refs['placeholder'];
    },

    style() {
      return this.affix
        ? {
            position: 'fixed',
            top: this.top + 'px',
            zIndex: this.zIndex ? startIndex++ : 'auto'
          }
        : {};
    },
    placeStyle() {
      return this.affix
        ? {
            width: this.width + 'px',
            height: this.height + 'px'
          }
        : { display: 'none' };
    }
  },
  methods: {
    handlerScroll(e) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const rect = this.$el.getBoundingClientRect();
      const clientTop = document.body.clientTop;
      const top = rect.top + scrollTop - clientTop;

      if (top - this.top < scrollTop && !this.affix) {
        this.affix = true;
        this.$emit('on-change', true);
      } else if (top - this.top > scrollTop && this.affix) {
        this.affix = false;
        this.$emit('on-change', false);
      }
    }
  },
  mounted() {
    addEvent(window, 'scroll', this.handlerScroll);
    this.width = this.$el.clientWidth;
    this.height = this.$el.clientHeight;
  },

  render(h) {
    return (
      <div>
        <div ref="affix" style={this.style}>
          {this.$slots.default}
        </div>
        <div ref="placeholder" style={this.placeStyle} />
      </div>
    );
  }
};
