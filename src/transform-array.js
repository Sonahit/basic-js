const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    switch (el) {
      case "--discard-next":
      case "--discard-prev":
      case "--double-next":
      case "--double-prev":
        continue;
    }

    switch (arr[index - 1]) {
      case "--discard-next": {
        continue;
      }
      case "--double-next": {
        newArr.push(el, el);
        break;
      }
      default: {
        newArr.push(el);
      }
    }

    switch (arr[index + 1]) {
      case "--discard-prev": {
        newArr.pop();
        break;
      }
      case "--double-prev": {
        newArr.push(el);
        break;
      }
    }
  }
  return newArr;
};

[
  "--double-prev",
  ["somebody", "told", "me"],
  "--discard-next",
  false,
  "--discard-prev",
  0,
  "--discard-prev",
  false,
  "--double-prev",
  "ABC",
  false,
  ["somebody", "told", "me"],
  true,
  1,
  "--discard-prev",
];
