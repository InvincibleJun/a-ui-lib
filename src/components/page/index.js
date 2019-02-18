export default {
  name: 'c-page',
  data() {
    return {
      page: 1
    };
  },
  props: {
    value: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: 10
    },
    input: {
      type: Boolean,
      default: false
    },
    unit: {
      type: Number,
      default: 5
    }
  },

  computed: {
    // unitIsOdd() {
    //   return !!this.unit % 2;
    // },
    count() {
      return Math.ceil(this.total / this.pageSize);
    },

    pageArray() {
      const pages = new Array(this.count);

      for (let i = 0, l = pages.length; i < l; i++) {
        const page = i + 1;
        if (page === 1 || page === this.count) {
          pages[i] = page;
        } else {
          const l = (this.unit - 1) / 2;
          const showNumber = Math.abs(page - this.page) <= l;
          pages[i] = showNumber ? page : page < this.page ? 'prev' : 'next';
        }
      }

      return pages.filter(
        (v, k) => typeof v === 'number' || typeof pages[k - 1] === 'number'
      );
    }
  },

  methods: {
    toPage(page) {
      if (page > this.count) page = this.count;
      if (page <= 0) page = 1;
      this.page = page;
      this.$emit('input', page);
      this.$emit('on-change', page);
    },

    handlerInputChange(e) {
      const tmpVal = parseInt(e.target.value);
      if (isNaN(tmpVal)) {
      } else {
        this.toPage(tmpVal);
      }
    },

    moveToUnit(direction) {
      if (direction === 'left') {
        this.page <= this.unit
          ? this.toPage(1)
          : this.toPage(this.page - this.unit);
      } else {
        this.page + this.unit > this.count
          ? this.toPage(this.count)
          : this.toPage(this.page + this.unit);
      }
    },

    renderPage(h) {
      return this.pageArray.map(val => {
        if (typeof val === 'number') {
          return <div onClick={() => this.toPage(val)}>{val}</div>;
        } else if (val === 'prev') {
          return <div onClick={() => this.moveToUnit('left')}>后退</div>;
        } else if (val === 'next') {
          return <div onClick={() => this.moveToUnit('right')}>前进</div>;
        }
      });
    }
  },
  watch: {
    value: {
      handler(nv) {
        this.page = nv;
      },
      immediate: true
    }
  },

  render(h) {
    return (
      <div>
        {this.simple ? (
          <div />
        ) : (
          <div>
            <div class="c-page-left">左</div>
            {this.renderPage(h)
            // this.pageArray.map(v => {
            // if ()
            // return <div onClick={() => this.toPage(v)}>{v}</div>
            // })
            }
            <div class="c-page-right">右</div>
            <input
              value={this.page}
              onChange={e => this.handlerInputChange(e)}
            />
          </div>
        )}
      </div>
    );
  }
};
