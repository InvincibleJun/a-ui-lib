import Popper from "../../mixins/popper";

export default {
  mixins: [Popper],

  name: "c-tooltip",

  props: {
    content: {
      type: String,
      default: ""
    },

    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      show: false
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
      this.show = true;
    }
  },

  mounted() {
    this.init();
  },

  render() {
    const slot = this.$slots;
    return (
      <div
        ref="container"
        class="c-tooltip-container"
        onMouseenter={this.openTooltip}
      >
        {this.$slots.default}
        <transition name="c-fade">
          <div ref="popper" v-show={this.show} class="c-tooltip-popper">
            <div class="c-tooltip-arrow" />
            {this.$slots.content ? this.$slots.content : <p>{this.content}</p>}
          </div>
        </transition>
      </div>
    );
  }
};
