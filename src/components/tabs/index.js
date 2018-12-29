import { oneInArray } from '../../utils/valid-prop';

const TYPES = ['line'];

const POSITIONS = ['left', 'top', 'right', 'bottom'];

export default {
  name: 'c-tabs',

  data() {
    return {
      active: 0,
      left: 0,
      activeIndex: 0,
      activeWidth: 0,
      list: []
    };
  },

  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    position: {
      type: String,
      validate: oneInArray(POSITIONS),
      default: 'top'
    },
    type: {
      type: String,
      validate: oneInArray(TYPES),
      default: 'card'
    },
    animated: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    getChilds() {
      return this.$children.filter(v => 'c-tabs-item' === v.$options.name);
    },

    activeItem(index, label) {
      this.activeIndex = index;
      this.$nextTick(() => {
        this.active = label
          ? label
          : this.list[index];
        const { width } = this.$refs[this.active].getBoundingClientRect();

        this.activeWidth = width;
      });
    },

    container() {

      // const classNames = [];

      return <div class={`c-tabs-conatiner-${ this.position }`} />;
    },

    updateBar() {
      this.list = this.getChilds().map(v => v.label);
    },

    renderNav() {
      return this.list.map((label, index) => {
        const classNames = ['c-tabs-label'];

        if (index === this.activeIndex) {
          classNames.push('c-tabs-active');
        }
        if (this.animated) {
          classNames.push('c-tabs-label-aniamted');
        }
        if ('card' === this.type) {
          classNames.push('c-tabs-card');
        }

        return (
          <div
            class={classNames}
            ref={label}
            onClick={() => this.activeItem(index, label)}
          >
            {label}
          </div>
        );
      });
    },

    renderLine() {
      const props = {
        class: this.animated
          ? 'c-tabs-line-animated'
          : '',
        style: {
          width: `${ this.activeWidth }px`,
          transform: `translateX(${ this.left }px)`
        }
      };

      return (
        <div class='c-tabs-line-container'>
          {'line' === this.type && <div {...props} />}
        </div>
      );
    }
  },

  watch: {
    value: {
      handler(nv) {
        this.active = nv;
      },
      immediate: true
    },
    activeIndex: {
      handler(nv) {
        this.$nextTick(() => {
          this.left = this.list.slice(0, nv).reduce((accu, curr) => {
            const { width } = this.$refs[curr].getBoundingClientRect();

            return accu + width;
          }, 0);
        });
      },
      immediate: true
    }
  },

  mounted() {
    this.updateBar();
    const index = this.list.findIndex(v => v === this.active);

    this.activeItem(index);
  },

  render() {
    return (
      <div class='c-tabs-wrapper'>
        <div class='c-tabs-nav'>
          {this.renderNav()}
          {this.renderLine()}
        </div>
        {this.$slots.default}
      </div>
    );
  }
};
