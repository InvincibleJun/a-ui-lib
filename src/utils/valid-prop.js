export const isColor = function(val) {
  if (typeof val !== "string") return false;
  return /^(\#[a-fA-F0-9]{3}|\#[a-fA-F0-9]{6}|rgb(a)?\(\d{1,3},\d{1,3},\d{1,3}(,1|(,0?\.\d+))?\))$/.test(
    val.replace(" ", "")
  );
};

export const isPlacement = function(val) {
  return /^(auto|top|right|bottom|left)(-start|-end)?$/.test(val);
};

export const oneInArray = function(arr) {
  return function(val) {
    return arr.indexOf(val) !== -1;
  };
};
