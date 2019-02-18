import events from '@/mixins/events';
import { isArray } from '@/utils/func';

const isFormItemChildren = component => {
  return (component.isFormItemChildren = true);
};

export default {
  name: 'c-form-item',

  mixins: [events],

  props: {
    // 表头名
    label: {
      type: String
    },
    // 检验字段名
    prop: {
      type: String
    },
    // 展示错误信息
    showMessage: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isFormItem: true,
      isError: false,
      errorMsg: '',
      blurRules: [],
      changeRules: []
    };
  },

  computed: {
    rule() {
      return this.prop ? this.$parent.rules[this.prop] : null;
    },

    labelStyle() {
      const { warp, labelWidth, inline } = this.$parent;
      return warp
        ? {
            display: 'block'
          }
        : {
            width: labelWidth + 'px'
          };
      // return this.$parent.labelWidth;
    }
  },

  watch: {
    rule: {
      handler(nv) {
        if (nv) {
          nv.forEach(r => {
            const { trigger = 'blur' } = r;
            this[`${trigger}Rules`].push(r);
          });
        }
      },
      immediate: true
    }
  },

  methods: {
    handlerError(err) {
      this.errorMsg = typeof err !== 'string' ? err.toString() : err;
      this.isError = true;
      this.broadcast(isFormItemChildren, 'handlerError', this.errorMsg);
    },

    handlerVaildate() {
      this.broadcast(isFormItemChildren, 'handlerVaildate');
    },

    handler(type, value) {
      const asyncValidators = this[`${type}Rules`].map(rule => {
        return this.dispatch('c-form', 'checkFeild', this.prop, {
          value,
          rule
        });
      });
      //
      Promise.all(asyncValidators)
        .then(() => {
          this.handlerVaildate();
          // console.log(arg)
        })
        .catch(err => {
          err = isArray(err) ? err[0] : err;
          this.handlerError(err.message);
        });
    }
  },

  render(h) {
    return (
      <div>
        {this.label && <label style={labelStyle}>{this.label}</label>}
        {this.$slots.default}
        {this.showMessage && this.isError && <div>{this.errorMsg}</div>}
      </div>
    );
  }
};
