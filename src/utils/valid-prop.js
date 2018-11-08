export const isColor = function(val) {
  if (typeof val !== "string") return false;
  return /^(\#[a-fA-F0-9]{3}|\#[a-fA-F0-9]{6}|rgb(a)?\(\d{1,3},\d{1,3},\d{1,3}\))$/.test(
    val.replace(" ", "")
  );
};
