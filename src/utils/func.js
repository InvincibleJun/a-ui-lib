/**
 *
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
 *
 * @return {Function} 
 */
export const debounce = function(fn, delay) {
  var timer
  return function() {
      var context = this
      var args = arguments
      clearTimeout(timer)
      timer = setTimeout(function() {
        fn.apply(context, [timer, ...args])
      }, delay)
    }
  }
}
