import { cloneDeep } from 'lodash';
import Schema from 'async-validator';
import { isArray } from '@/utils/func';
import events from '@/mixins/events';

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

  watch: {
    models: {
      handler(nv, ov) {
        // 初始化
        if (!ov) {
          this.originForm = cloneDeep(nv);
        }
      },
      immediate: true
    }
  },

  methods: {
    handlerSubmit(e) {
      e.preventDefault();
      return false;
    },

    resetFeilds(fields) {
      if (isArray(fields)) {
        fields.forEach(field => {
          this.resetFeilds(field);
        });
      } else if (typeof fields === 'string') {
        this.broadcast(component => {
          return isFormItem(component) && component.prop === fields;
        }, 'resetFeild');
      } else {
        this.broadcast(isFormItem, 'resetFeild');
      }
    },

    checkFeilds(fields, callback = () => {}) {
      // 默认参数交换
      if (typeof fields === 'function') {
        callback = fields;
        fields = null;
      }

      if (isArray(fields)) {
        fields.forEach(field => {
          this.checkFeilds(field);
        });
      } else if (typeof fields === 'string') {
        this.broadcast(
          component => {
            return isFormItem(component) && component.prop === fields;
          },
          'handler',
          'all'
        ).then(error => {
          callback(error || null);
        });
      } else {
        Promise.all(this.broadcast(isFormItem, 'handler', 'all')).then(arg => {
          const errors = arg.filter(v => v);
          callback(errors.length ? errors : null);
        });
      }
    }
  },

  render(h) {
    return (
      <form onSubmit={e => this.handlerSubmit(e)}>{this.$slots.default}</form>
    );
  }
};
