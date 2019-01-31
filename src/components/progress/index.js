import { isColor } from '../../utils/valid-prop';

export default {
  name: 'c-progress',

  data() {
    return { circle: null };
  },

  props: {
    value: {
      type: Number,
      required: true
    },

    // line, circle
    type: {
      type: String,
      default: 'line'
    },

    // circle有效
    width: {
      type: Number,
      default: 120
    },

    // line有效
    height: {
      type: Number,
      default: 18
    },

    // line的百分比位置
    textInside: {
      type: Boolean,
      default: false
    },

    // 圆环宽度
    strokeWidth: {
      type: Number,
      default: 6
    },

    // 保留小数位
    fixed: {
      type: Number,
      default: 1
    },

    //  color
    color: {
      type: String,
      default: '#67c23a',
      validator: isColor
    },

    // 阴影颜色
    bgColor: {
      type: String,
      default: '#ebeef5',
      validator: isColor
    }
  },

  watch: {
    percentage(nv) {
      if (nv === 100) {
        this.$emit('on-finished', 100);
      }
    }
  },

  computed: {
    percentage() {
      return this.value.toFixed(this.fixed);
    },

    lineStyle() {
      return {
        width: `${this.percentage}%`,
        borderRadius: `${this.height / 2}px`,
        backgroundColor: this.color
      };
    },

    strokeDash() {
      return `${this.length} ${this.length}`;
    },

    svgCircleD() {
      return `M 50 50 m 0 -${this.svgRadius} a ${this.svgRadius} ${
        this.svgRadius
      } 0 0 0 0 ${this.svgRadius * 2} a ${this.svgRadius} ${
        this.svgRadius
      } 0 1 0 0 -${this.svgRadius * 2}`;
    },

    svgStrokeWidth() {
      return (this.strokeWidth / this.width) * 100;
    },

    svgRadius() {
      return (100 - this.svgStrokeWidth) / 2;
    },

    length() {
      return 2 * Math.PI * this.svgRadius;
    },

    dashoffset() {
      return this.circle
        ? // eslint-disable-next-line no-mixed-operators
          this.length - (this.percentage / 100) * this.length
        : this.length;
    },

    getTextClass() {
      const classNames = ['c-progress-text'];

      if (this.type === 'circle') {
        classNames.push('c-progress-text-circle');
      } else if (!this.textInside) {
        classNames.push('c-progress-text-out');
      }

      return classNames;
    }
  },

  mounted() {
    this.timer = setTimeout(() => {
      this.circle = this.$refs.circle;
    }, 0);
  },

  destory() {
    clearTimeout(this.timer);
  },

  methods: {
    getLineClass() {
      const classes = ['c-progress-line-bar'];

      // eslint-disable-next-line no-unused-expressions
      !this.textInside && classes.push('c-progress-line-not-inside');

      return classes.join(' ');
    }
  },

  render(h) {
    const { type, textInside, percentage } = this;

    const text = (
      <div class={this.getTextClass} style={{ lineHeight: `${this.height}px` }}>
        {percentage}%
      </div>
    );

    if (type === 'line') {
      return (
        <div
          class="c-progress-line-wrapper"
          style={{
            paddingRight: !textInside ? `${50}px` : 0
          }}
        >
          <div
            class="c-progress-line-bar"
            style={{
              backgroundColor: this.bgColor,
              borderRadius: `${this.height / 2}px`,
              height: `${this.height}px`
            }}
          >
            <div class="c-progress-line-percentage" style={this.lineStyle}>
              {textInside && text}
            </div>
          </div>
          {text}
        </div>
      );
    } else if (type === 'circle') {
      return (
        <div
          class="c-progress-circle"
          style={{
            width: `${this.width}px`,
            height: `${this.width}px`
          }}
        >
          <svg version="1.1" viewBox="0 0 100 100">
            <path
              d={this.svgCircleD}
              stroke={this.bgColor}
              fill="none"
              stroke-width={this.svgStrokeWidth}
            />
            <path
              stroke-linecap="round"
              class="c-progress-circle-percentage"
              stroke-dasharray={this.strokeDash}
              stroke-dashoffset={this.dashoffset}
              ref="circle"
              d={this.svgCircleD}
              stroke={this.color}
              fill="none"
              stroke-width={this.svgStrokeWidth}
            />
          </svg>
          {text}
        </div>
      );
    }
  }
};
