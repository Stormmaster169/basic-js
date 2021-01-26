const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error("THROWN");
  }
  let result = [];
  let newArr = [...arr];
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-prev" && i === 0) {
      newArr.splice(i, 1);
    } else if (newArr[i] === "--discard-prev" && newArr[i - 1] === "NaN") {
      newArr.splice(i, 1);
    } else if (newArr[i] === "--discard-prev") {
      newArr.splice(--i, 2);
    }
    if (newArr[i] === "--discard-next" && i !== newArr.length - 1) {
      newArr.splice(i, 2, "NaN");
    } else if (newArr[i] === "--discard-next" && i === newArr.length - 1) {
      newArr.splice(i, 1);
    }
    if (newArr[i] === "--double-prev" && i === 0) {
      newArr.splice(i, 1);
    } else if (newArr[i] === "--double-prev" && newArr[i - 1] === "NaN") {
      newArr.splice(i, 1);
    } else if (newArr[i] === "--double-prev") {
      newArr[i] = newArr[--i];
    }
    if (newArr[i] === "--double-next" && i !== newArr.length - 1) {
      newArr[i] = newArr[++i];
    } else if (newArr[i] === "--double-next" && i === newArr.length - 1) {
      newArr.splice(i, 1);
    }
  }
  newArr.map((el) => el !== "NaN" ? result.push(el) : el);
  return result;
};
