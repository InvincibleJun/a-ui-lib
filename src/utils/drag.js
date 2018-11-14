export default (el, func) => {
  const move = e => {
    func(e);
  };
  const end = e => {
    func(e);
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", end);
  };
  const down = e => {
    document.onselectstart = function() {
      return false;
    };
    document.ondragstart = function() {
      return false;
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", end);
  };

  el.addEventListener("mousedown", down);

  return function() {
    el.removeEventListener("mousedown", down);
    document.ondragstart = null;
    document.onselectstart = null;
  };
};
