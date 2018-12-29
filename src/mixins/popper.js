/*
 * https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md
 * thanks
 */
import Popper from 'popper.js';
import { isPlacement } from '../utils/valid-prop';

export default {
  data() {
    return { _popper: null };
  },

  props: {
    placement: {
      type: String,
      validate: isPlacement,
      default: 'bottom-start'
    }
  },

  watch: {
    // eslint-disable-next-line no-unused-vars
    show(nv) {
      this.$nextTick(this.update);
    }
  },

  methods: {
    init() {
      const option = {
        placement: this.placement,
        modifiers: {
          preventOverflow: { enabled: false },
          hide: { enabled: false }
        },
        onUpdate: () => {
          this.$emit('update');
        },
        onCreate: () => {
          this.$nextTick(this.update);
        }
      };

      this._popper = new Popper(this.reference, this.popper, option);
    },
    update() {
      this._popper.update();
    }
  },

  destory() {
    this._popper.destory();
  }
};
