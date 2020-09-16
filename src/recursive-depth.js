const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    const currentDepth = depth;
    for (const ar of arr) {
      if (Array.isArray(ar)) {
        const childDepth = this.calculateDepth(ar, currentDepth + 1);
        if (childDepth > depth) {
          depth = childDepth;
        }
      }
    }
    return depth;
  }
};
