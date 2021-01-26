const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  return sampleActivity === String && 0 < Number(sampleActivity) < 15
    ? Math.log(MODERN_ACTIVITY / Number(sampleActivity)) /
        (0.693 / HALF_LIFE_PERIOD)
    : false;
};
