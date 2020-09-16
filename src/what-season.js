const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("THROWN");
  }
  const [winter, spring, summer, autumn] = [
    "winter",
    "spring",
    "summer",
    "autumn",
  ];
  return {
    [1 - 1]: winter,
    [2 - 1]: winter,
    [3 - 1]: spring,
    [4 - 1]: spring,
    [5 - 1]: spring,
    [6 - 1]: summer,
    [7 - 1]: summer,
    [8 - 1]: summer,
    [9 - 1]: autumn,
    [10 - 1]: autumn,
    [11 - 1]: autumn,
    [12 - 1]: winter,
  }[date.getMonth()];
};
