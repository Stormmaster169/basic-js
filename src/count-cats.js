const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let counter = 0;
  backyard.map(el => el.map(el => el === "^^" ? ++counter : el));
  return counter;
};
