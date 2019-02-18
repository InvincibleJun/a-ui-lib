import { oneInArray } from '../../utils/valid-prop';
import elementResizeDetectorMaker from 'element-resize-detector';

const TYPES = ['line', 'card'];

const POSITIONS = ['left', 'top', 'right', 'bottom'];

export default {
  name: 'c-tabs',

  data() {
    return {
      // -1 初始化，0 初次改变，1 已激活
      changed: -1,
      // 允许滑动
      ableScroll: false,
      active: 0,
      left: 0,
      scrollLeft: 0,
      // activeIndex: 0,
      activeWidth: 0,
      list: [],
      labels: [],

      // 容器宽度
      wrapperWidth: 0,
      contentWidth: 0,

      // 容器引用
      container: null
    };
  },

  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    remove: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      validate: oneInArray(POSITIONS),
      default: 'top'
    },
    type: {
      type: String,
      validate: oneInArray(TYPES),
      default: 'line'
    },
    animated: {
      type: Boolean,
      default: true
    },
    lineStart: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    warpperClassName() {
      let classNames = ['c-tabs-wrapper'];
      if (this.ableScroll) {
        classNames.push('c-tabs-scroll-active');
      }
      return classNames;
    },
    scrollStyle() {
      return {
        transform: `translateX(-${this.scrollLeft}px)`
      };
    }
  },

  methods: {
    // 获得子组件
    getChilds() {
      return this.$children.filter(v => {
        return (
          'c-tabs-item' === v.$options.name ||
          // ssr
          'c-tabs-item' === v.$options._componentTag
        );
      });
    },

    // scrollToLeft() {
    //   const visibleWidth =
    //     this.contentWidth - (this.wrapperWidth + this.scrollLeft);
    //   if (visibleWidth < this.wrapperWidth) {
    //     this.scrollLeft = this.contentWidth - this.wrapperWidth;
    //   } else {
    //     this.scrollLeft += this.wrapperWidth;
    //   }
    // },

    /**
     * 滚动操作
     * @param {string} direction left/right 滚动方向
     */
    scrollTo(direction) {
      if (direction === 'right') {
        const visibleWidth =
          this.contentWidth - (this.wrapperWidth + this.scrollLeft);
        if (visibleWidth < this.wrapperWidth) {
          this.scrollLeft = this.contentWidth - this.wrapperWidth;
        } else {
          this.scrollLeft += this.wrapperWidth;
        }
      } else {
        const visibleWidth = this.scrollLeft;

        if (visibleWidth < this.wrapperWidth) {
          this.scrollLeft = 0;
        } else {
          this.scrollLeft -= this.wrapperWidth;
        }
      }
    },

    /**
     * 检测激活label是否在可视区域内
     * @param {HTMLElement} el
     */
    checkLabelVisible(el) {
      const elWidth = this.activeWidth;
      const elLeft = el.offsetLeft;
      const contentRight = this.wrapperWidth + this.scrollLeft;
      const contentLeft = this.scrollLeft;

      // label宽度大于总宽度
      if (elWidth > this.wrapperWidth) {
        this.scrollLeft = elLeft;
        return;
      }

      // 左侧隐藏
      if (elLeft < contentLeft) {
        // 长度不够居左时，滑动至最右侧
        if (this.contentWidth - elLeft < this.wrapperWidth) {
          this.scrollLeft = this.contentWidth - this.wrapperWidth;
        } else {
          this.scrollLeft = el.offsetLeft;
        }
      }

      // 右侧隐藏
      if (elLeft + elWidth > contentRight) {
        // 长度不够居右时，滑动至最左侧
        if (elLeft < this.wrapperWidth - elWidth) {
          this.scrollLeft = 0;
        } else {
          this.scrollLeft = elLeft - this.wrapperWidth + elWidth;
        }
      }
    },

    updateScrollBar(el) {
      this.wrapperWidth = el.offsetWidth;
      this.contentWidth = this.$refs['scroll'].offsetWidth;

      if (this.contentWidth > this.wrapperWidth) {
        this.ableScroll = true;
      } else {
        this.ableScroll = false;
      }
    },

    removeLabel(label, index) {
      // this.
      this.updateBar();
    },

    activeItem(activeIndex) {
      this.activeIndex = activeIndex;
      const label = this.labels[activeIndex];

      this.$emit('on-change', label, activeIndex);
      this.$emit('input', label);

      this.$nextTick(() => {
        const el = this.$refs[this.value];
        const { width } = el.getBoundingClientRect();

        this.activeWidth = width;

        const visible = this.checkLabelVisible(el);
      });
    },

    findActiveIndex() {
      return this.labels.findIndex(v => v === this.value);
    },

    // 获得子元素label
    updateBar() {
      this.labels = this.getChilds().map(v => v.label);
    },

    renderNav() {
      return this.labels.map((label, index) => {
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
            onClick={() => this.activeItem(index)}
          >
            {label} {this.remove && <b onClick={() => this.removeLabel(label, index)}>删</b>}
          </div>
        );
      });
    },

    renderLine() {
      const props = {
        class:
          !this.animated || (!this.lineStart && this.changed === 0)
            ? ''
            : 'c-tabs-line-animated',
        style: {
          width: `${this.activeWidth}px`,
          transform: `translateX(${this.left}px)`
        }
      };

      return (
        <div class="c-tabs-line-container">
          {'line' === this.type && <div {...props} />}
        </div>
      );
    }
  },

  watch: {
    activeIndex: {
      handler(nv) {
        if (this.changed !== 1) this.changed++;

        if (this.type === 'line') {
          this.$nextTick(() => {
            this.left = this.labels.slice(0, nv).reduce((accu, curr) => {
              const { width } = this.$refs[curr].getBoundingClientRect();
              return accu + width;
            }, 0);
          });
        }
      },
      immediate: true
    },
    value: {
      handler(nv) {
        const activeIndex = this.findActiveIndex();
        this.activeItem(activeIndex);
      }
    }
  },

  mounted() {
    this.updateBar();

    this.container = this.$refs['container'];

    // 当前激活index
    const activeIndex = this.findActiveIndex();

    if (activeIndex < 0) {
      throw new Error(`not found label： ${this.value}`);
    }

    this.observer = elementResizeDetectorMaker({
      strategy: 'scroll'
    });

    this.observer.listenTo(this.container, el => {
      this.updateBar();

      this.updateScrollBar(el);
      this.activeItem(activeIndex);
    });
  },

  render() {
    return (
      <div class="c-tabs" ref="wrapper">
        <div class={this.warpperClassName}>
          <div class="c-tabs-main" ref="container">
            <div class="c-tabs-scroll" ref="scroll" style={this.scrollStyle}>
              {this.renderNav()}
            </div>
          </div>

          {this.ableScroll && (
            <div class="c-tabs-left" onClick={() => this.scrollTo('left')}>
              {'<<'}
            </div>
          )}

          {this.ableScroll && (
            <div class="c-tabs-right" onClick={() => this.scrollTo('right')}>
              {'>>'}
            </div>
          )}

          {this.type === 'line' && this.renderLine()}
        </div>
        {this.$slots.default}
      </div>
    );
  }
};
