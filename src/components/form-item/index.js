import Schema from 'async-validator';
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
    },

    rules: {
      type: Array,
      default: () => []
    },

    required: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isFormItem: true,
      isError: false,
      errorMsg: '',
      ruleRequired: false
    };
  },

  computed: {
    isRequired() {
      return this.required || this.ruleRequired;
    },

    rule() {
      return this.prop
        ? { [this.prop]: this.$parent.rules[this.prop].concat([this.rules]) }
        : null;
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
    }
  },

  watch: {
    rule: {
      handler(nv) {
        if (nv) {
          nv[this.prop].forEach(r => {
            const { required } = r;
            if (required && !this.ruleRequired) this.ruleRequired = true;
          });
        }
      },
      immediate: true
    }
  },

  methods: {
    checkFeild(rule) {
      const fields = {
        [this.prop]: this.$parent.models[this.prop]
      };

      const validator = new Schema(rule || this.rule);

      return new Promise((resolve, reject) => {
        try {
          validator.validate(fields, (errors, fields) => {
            if (errors) {
              reject(errors, fields);
            } else {
              resolve();
            }
          });
        } catch (e) {
          reject(e);
        }
      });
    },

    handlerError(err) {
      this.errorMsg = typeof err !== 'string' ? err.toString() : err;
      this.isError = true;
      this.broadcast(isFormItemChildren, 'handlerError', this.errorMsg);
    },

    handlerVaildate() {
      this.broadcast(isFormItemChildren, 'handlerVaildate');
    },

    handler(type, value) {
      const asyncValidators = this.rules[this.prop].filters(
        ({ trigger = 'blur' }) => v.trigger === type
      );

      this.checkFeild({
        [this.prop]: asyncValidators
      })
        .then(() => {
          this.handlerVaildate();
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
        {this.label && (
          <label style={this.labelStyle}>
            {this.isRequired && '*'}
            {this.label}
          </label>
        )}
        {this.$slots.default}
        {this.showMessage && this.isError && <div>{this.errorMsg}</div>}
      </div>
    );
  }
};
