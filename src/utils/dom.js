// const d = document

export const addClass = function(ele, className) {
  ele.classList.add(className);
};

export const removeClass = function(ele, className) {
  ele.classList.remove(className);
};

export const addEvent = function(ele, eventName, cb) {
  const callback = e => {
    cb(e);
  };

  ele.addEventListener(eventName, callback);

  return () => {
    ele.removeEventListener(eventName, callback);
  };
};

export const checkInComponent = function(target, ele) {
  while (target) {
    if (ele === target) return true;
    if (target === document.body) return false;
    target = target.parentNode;
  }
};
