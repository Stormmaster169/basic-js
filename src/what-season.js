const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  } else if (
    Object.prototype.toString.call(date) !== "[object Date]" ||
    isNaN(date)
  ) {
    throw new Error("THROWN");
  } else if (
    (0 <= date.getMonth() && date.getMonth() <= 1) ||
    date.getMonth() === 11
  ) {
    return "winter";
  } else if (2 <= date.getMonth() && date.getMonth() <= 4) {
    return "spring";
  } else if (5 <= date.getMonth() && date.getMonth() <= 7) {
    return "summer";
  } else if (8 <= date.getMonth() && date.getMonth() <= 10) {
    return "autumn";
  }
};
