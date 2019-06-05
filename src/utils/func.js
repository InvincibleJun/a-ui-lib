const oP = Object.prototype;

/**
 *
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
 * @return {Function}
 */
export const debounce = function(fn, delay) {
  let timer;

  return function(callback) {
    // eslint-disable-next-line
    const context = this;

    // eslint-disable-next-line prefer-rest-params
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, [timer, ...args]);
      callback()
    }, delay);

  };
};

export const createEmptyArray = function(l) {
  return 'x'.repeat(l).split('');
};

/**
 * 判断变量是否undefined
 * @param {any} v
 * @return {boolean}
 */
export const isUndefined = function(v) {
  return typeof v === 'undefined';
};

/**
 * 判断对象是否存在属性
 * @param {object} o 对象
 * @param {string} k 属性
 * @return {boolean}
 */
export const hasKey = function(o, k) {
  return oP.hasOwnProperty.call(o, k);
};

export const isArray = function(o) {
  return oP.toString.call(o) === '[object Array]';
};

/**
 * 判断数组是否包含目标
 * @param {array} o
 * @param {any} target
 * @return {boolean}
 */
export const oneOf = function(o, target) {
  if (isArray(o)) {
    for (let i = 0, l = o.length; i < l; i++) {
      if (o[i] === target) {
        return true;
      }
    }

    return false;
  }

  return false;
};
//