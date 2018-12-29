// import { createEmptyArray } from '@/utils/func';

export default {
  data() {
    return {
      index: 0,
      items: [],
      count: 0,
      animating: false,
      showCtrl: false
    };
  },

  props: {
    width: {
      type: Number,
      default: 400
    },

    height: {
      type: Number,
      default: 300
    },

    autoPlay: {
      type: Boolean,
      default: true
    },

    interval: {
      type: Number,
      default: 2000
    }
  },

  computed: {
    style() {
      return {
        height: `${ this.height }px`,
        width: `${ this.width }px`
      };
    }
  },

  methods: {
    setIndex(index) {
      if (this.animating) {
        return;
      }

      // 末尾项
      if ('next' === index) {
        this.index = this.index === this.count - 1
          ? 0
          : this.index + 1;
      } else if ('prev' === index) {
        console.log('prev');
        this.index = 0 === this.index
          ? this.count - 1
          : this.index - 1;
      } else {
        this.index = index;
      }

      this.paly();
    },
    makeLine() {
      const res = [];

      for (let i = 0, l = this.count; i < l; i++) {
        res.push(<li key={i} onClick={() => this.setIndex(i)} />);
      }

      return res;
    },

    paly() {
      if (this.autoPlay) {
        clearInterval(this.timer);
        this.timer = setTimeout(() => {
          this.setIndex('next');
        }, this.interval);
      }
    }
  },

  watch: {
    index(nV, oV) {
      this.items.forEach((item, index) => {
        item.transform(index, nV, oV, this.count);
        this.animating = true;
      });
      setTimeout(() => {
        this.animating = false;
      }, 400);
    }
  },

  mounted() {
    this.items = this.$children;
    this.count = this.items.length;

    this.items.forEach((item, index) => {
      item.init(index);
    });

    this.paly();
  },

  beforeDestory() {
    clearTimeout(this.timer);
  },

  render() {
    return (
      <div
        class='c-carousel-container'
        style={this.style}
        onMouseover={() => this.showCtrl = true}
        onMouseout={() => this.showCtrl = false}
      >
        <transition name='c-carousel-left'>
          {this.showCtrl
            && <div
              class='c-carousel-ctrl c-carousel-ctrl-left'
              onClick={() => this.setIndex('prev')}
            >
              <i class='iconfont icon-left' />
            </div>
          }
        </transition>
        <transition name='c-carousel-right'>
          {this.showCtrl
            && <div
              class='c-carousel-ctrl c-carousel-ctrl-right'
              onClick={() => this.setIndex('next')}
            >
              <i class='iconfont icon-right' />
            </div>
          }
        </transition>
        <ul class='c-carousel-bottom'>{this.makeLine()}</ul>
        {this.$slots.default}
      </div>
    );
  }
};
