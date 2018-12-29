import Popper from '../../mixins/popper';
import { isColor } from '../../utils/valid-prop';
import { debounce } from '../../utils/func';

export default {
  mixins: [Popper],

  name: 'c-tooltip',

  props: {
    content: {
      type: String,
      default: ''
    },

    value: {
      type: Boolean,
      default: false
    },

    backgroundColor: {
      type: String,
      default: 'rgb(70,76,91)',
      validator: isColor
    },

    timeout: {
      type: Number,
      default: 0
    },

    delay: {
      type: Number,
      default: 200
    }
  },

  data() {
    return {
      show: false,
      debounce: null,
      timer: null
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(nv) {
        this.show = nv;
      }
    }
  },

  computed: {
    reference() {
      return this.$refs.container;
    },

    popper() {
      return this.$refs.popper;
    }
  },

  methods: {
    openTooltip() {
      clearTimeout(this.timer);
      this.debounce();
    },

    closeTooltip() {
      if (this.timeout > 0) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.show = false;
        }, this.timeout);
      } else {
        this.show = false;
      }
    }
  },

  mounted() {
    this.init();
    this.debounce = debounce(() => {
      this.show = true;
    }, this.delay);
  },

  render() {
    // eslint-disable-next-line no-unused-vars
    const slot = this.$slots;

    return (
      <div
        ref='container'
        class='c-tooltip-container'
        onMouseenter={this.openTooltip}
        onMouseleave={this.closeTooltip}
      >
        {this.$slots.default}
        <transition name='c-fade'>
          <div
            onMouseenter={this.openTooltip}
            onMouseleave={this.closeTooltip}
            class='c-tooltip-popper-container'
            ref='popper'
            v-show={this.show}
          >
            <div
              class='c-tooltip-popper'
              style={{
                background: this.backgroundColor,
                borderColor: this.backgroundColor
              }}
            >
              <div class='c-tooltip-arrow' />
              <div class='c-tooltip-content'>
                {this.$slots.content
                  ? this.$slots.content
                  : <p>{this.content}</p>
                }
              </div>
            </div>
          </div>
        </transition>
      </div>
    );
  }
};
