const CustomError = require("../extensions/custom-error");
/**
 *
 * @param {any[][]} matrix
 */
module.exports = function countCats(matrix) {
  let count = 0;
  const cat = "^^";
  matrix.forEach((arr) => arr.forEach((v) => v === cat && count++));
  return count;
};
