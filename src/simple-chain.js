const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  glue: "~~",

  getLength() {
    return this.chain.length;
  },

  addLink(value = undefined) {
    this.chain.push("" + value);
    return this;
  },

  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const finishedChain = this.chain
      .map((el) => {
        if (el === undefined) {
          return "( )";
        }
        return `( ${el} )`;
      })
      .join(this.glue);
    this.chain = [];
    return finishedChain;
  },
};

module.exports = chainMaker;
