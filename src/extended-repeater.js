const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.separator = options.separator || "+";
  options.additionSeparator = options.additionSeparator || "|";
  options.repeatTimes = options.repeatTimes || 0;
  options.additionRepeatTimes = options.additionRepeatTimes || 0;
  return options.repeatTimes !== 0 ? [...Array(options.repeatTimes)]
    .map(
      (el) =>
        String(str) +
        [...Array(options.additionRepeatTimes)]
          .map((el) => String(options.addition))
          .join(options.additionSeparator)
    )
    .join(options.separator) : String(str) + String(options.addition);
};
