const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  Array.isArray(members)
    ? members.map((el) =>
        typeof el === "string"
          ? result.push(el.replace(/\s/g, "").toUpperCase().split("")[0])
          : el
      )
    : members;
  return result !== [] ? result.sort().join("") : false;
};
