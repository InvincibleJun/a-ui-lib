import { cloneDeep } from 'lodash';
import Schema from 'async-validator';
import { isArray } from '@/utils/func';
import events, { findChildren } from '@/mixins/events';

Schema.warning = function() {};

const isFormItem = component => component.isFormItem;

export default {
  name: 'c-form',

  mixins: [events],

  props: {
    models: {
      type: Object,
      required: true
    },

    // 表头换行
    warp: {
      type: Boolean,
      default: false
    },

    // 布局inline模式
    inline: {
      type: Boolean,
      default: false
    },

    // label宽度
    labelWidth: {
      type: Number,
      default: 80
    },

    // async-validator校验规则
    rules: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      // 初始化form
      originForm: null,
      // 校验器
      validator: null
    };
  },

  created() {
    //
  },

  watch: {
    models: {
      handler(nv, ov) {
        // 初始化
        if (!ov) {
          this.originForm = cloneDeep(nv);
        }
      },
      immediate: true
    },
    rules: {
      handler(nv) {
        if (nv) {
          this.validator = new Schema(this.rules);
        }
      },
      immediate: true
    }
  },

  methods: {
    handlerReset(fields) {
      if (isArray(fields)) {
        fields.forEach(field => {
          this.handlerReset(field);
        });
      } else if (typeof fields === 'string') {
        this.models[fields] &&
          (this.models[fields] = cloneDeep(this.originForm)[fields]);
      } else {
        this.models = cloneDeep(this.originForm);
      }
    },

    handlerSubmit(e) {
      e.preventDefault();
      return false;
    },

    checkAllFeilds() {
      try {
        this.validator.validate(this.models, (errors, fields) => {
          if (errors) {
            console.log(errors);
          }
          Object.keys(this.models).forEach(key => {
            if (fields.indexOf(key) !== -1) {
              this.broadcast(
                component => {
                  return component.data;
                },
                'handlerError',
                errors[0]
              );
            } else {
              this.broadcast(component => {
                return component.data;
              }, 'handlerVaildate');
            }
          });
        });
      } catch (e) {
        throw new Error(e);
      }
    },

    checkFeild(name) {
      const fields = {
        [name]: option.value
      };
      findChildren(
        component => {
          return isFormItem(component) && name === component.prop;
        },
        component => {
          component.checkFeild();
        }
      );
    }
  },

  render(h) {
    console.log(this);
    return (
      <form onSubmit={e => this.handlerSubmit(e)}>{this.$slots.default}</form>
    );
  }
};
