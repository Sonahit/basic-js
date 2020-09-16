const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(encrypter = true) {
    this.encrypter = encrypter;
  }
  /**
   *
   * @param {string} msg
   * @param {string} key
   */
  encrypt(msg, key) {
    if (!(msg && key)) {
      throw new Error("Not implemented");
    }
  }
  /**
   *
   * @param {string} msg
   * @param {string} key
   */
  decrypt(msg, key) {
    if (!(msg && key)) {
      throw new Error("Not implemented");
    }
  }
}

module.exports = VigenereCipheringMachine;
