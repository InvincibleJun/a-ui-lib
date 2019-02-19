/**
 * 遍历子组件
 * @param {object} component 组件
 * @param {function} callback 调用方法
 */
export const findChildren = function(component, callback) {
  component.$children &&
    component.$children.forEach(v => {
      v.$children && findChildren(v, callback);
      callback(v);
    });
};

export default {
  methods: {
    /**
     * 向下广播
     * @param {string|function} componentCondition 子组件筛选条件
     * @param {string} hanlderName 事件名
     * @param  {...any} args 调用事件传递参数
     */
    broadcast(componentCondition, hanlderName, ...args) {
      let conditionFunc;
      let results = [];
      // 组件名判断
      if (typeof componentCondition === 'string') {
        conditionFunc = component => {
          return (
            component.$options.name === componentCondition ||
            component.$options._componentTag === componentCondition
          );
        };
        // 传入回掉函数判断
      } else if (typeof componentCondition === 'function') {
        conditionFunc = component => {
          return componentCondition(component);
        };
      }

      findChildren(this, component => {
        const isTarget = conditionFunc.call(this, component);

        if (
          isTarget &&
          component[hanlderName] &&
          typeof component[hanlderName] === 'function'
        ) {
          results.push(component[hanlderName].apply(component, args));
        }
      });

      return results;
    },

    /**
     * 触发父级组件方法
     * @param {string} componentName 组件名
     * @param {string} componentMethod 触发组件方法名
     * @param  {...any} args 携带触发参数
     * @return {any} 方法返回值
     */
    dispatch(componentName, componentMethod, ...args) {
      let component = this.$parent,
        done = false;
      while (!done && component) {
        // ssr
        const parentName =
          component.$options.name || component.$options._componentTag;

        const method = component[componentMethod];
        if (method && typeof method === 'function') {
          done = true;
          return method.apply(component, args);
        } else {
          component = component.$parent;
        }
      }
    }
  }
};
