const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str,
  {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  }
) {
  // COULD YOU PLZ WRITE MORE SPECIFIC TASK?????????????????????????
  // UNDEFINED SHOULD BE INCLUDED TOO!!!!!!!!!!!!!!!!!!!!!
  if (typeof str !== "string" && str !== undefined) {
    str = "" + str;
  }
  if (typeof addition !== "string" && addition !== undefined) {
    addition = "" + addition;
  }
  if (!repeatTimes) repeatTimes = 1;
  if (!additionRepeatTimes) additionRepeatTimes = 1;

  const repeatStr = (repeatStr, repeat, separator) => {
    return Array.from({ length: repeat }, () => repeatStr).join(separator);
  };

  return repeatStr(
    `${str}${repeatStr(addition, additionRepeatTimes, additionSeparator)}`,
    repeatTimes,
    separator
  );
};
