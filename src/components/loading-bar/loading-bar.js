export default {
  data() {
    return {
      show: false,
      status: 'loading',
      percent: 0
    };
  },

  props: {
    color: {
      type: String,
      default: "#2d8cf0"
    },

    height: {
      type: Number,
      default: 4
    }
  },

  render() {
    const { show, height, color } = this;
    return (
      <transition name="c-fade">
        <div
          v-show={show}
          style={{ height: this.height + "px" }}
          class="c-loading-bar-container"
        >
          <div
            style={{
              width: this.percent + "%",
              borderRadius: `0 ${this.height / 2}px ${this.height / 2}px 0`,
              backgroundColor: this.status === 'error' ? 'red': color,
              height: "100%"
            }}
            class="c-loading-bar-chunk"
          />
        </div>
      </transition>
    );
  }
};
