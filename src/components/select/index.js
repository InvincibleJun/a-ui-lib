import Dropdwon from '../dropdown';

export default {
  data() {
    return {};
  },

  components: { Dropdwon },

  props: { value: [String, Number] },

  methods: {
    open() {

    //
    }
  },

  created() {

    /*
     * if (this.$slots.default) {
     *   console.log(this)
     * }
     */
  },

  mounted() {
    const {
      // eslint-disable-next-line no-unused-vars
      left, top, height
    } = this.$el.getBoundingClientRect();
  },

  render() {
    return (
      <div>
        <input
          class='c-input'
          value={this.value}
          readonly
          style='width:300px'
        />

        <transition name='modal-fade'>
          <ul class='c-dropdown-menu' style='style' v-if='show'>
            <slot name='menu' />
          </ul>
        </transition>
      </div>
    );
  }
};
