const CustomError = require("../extensions/custom-error");

const OFFSET_ALPHABET = 97;
const OFFSET_MAJOR_ALPHABET = 65;
const ALPHABED_LENGTH = 26;

class VigenereCipheringMachine {
  constructor(encrypter = true) {
    this.encrypter = encrypter;
  }

  /**
   *
   * @param {number} charCode
   *
   * @returns {boolean}
   */
  isLowerCase(charCode) {
    return (
      OFFSET_ALPHABET <= charCode &&
      charCode <= OFFSET_ALPHABET + ALPHABED_LENGTH - 1
    );
  }

  /**
   *
   * @param {number} charCode
   *
   * @returns {boolean}
   */
  isUpperCase(charCode) {
    return (
      OFFSET_MAJOR_ALPHABET <= charCode &&
      charCode <= OFFSET_MAJOR_ALPHABET + ALPHABED_LENGTH - 1
    );
  }

  /**
   *
   * @param {string} char
   *
   * @returns {boolean}
   */
  isLetter(char) {
    return (
      this.isLowerCase(char.charCodeAt(0)) ||
      this.isUpperCase(char.charCodeAt(0))
    );
  }

  /**
   *
   * @param {string} key
   *
   * @returns {number[]}
   */
  defineKeys(key) {
    return key
      .split("")
      .filter((c) => this.isLetter(c))
      .map((c) => c.toLowerCase().charCodeAt(0) - OFFSET_ALPHABET);
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
    const keys = this.defineKeys(key);
    return this.crypt(msg, keys);
  }

  /**
   *
   * @param {string} msg
   * @param {number[]} keys
   */
  crypt(msg, keys) {
    if (!(msg && keys)) {
      throw new Error("Not implemented");
    }
    let newMsg = "";
    for (let i = 0, j = 0; i < msg.length; i++) {
      const c = msg.charCodeAt(i);

      if (this.isUpperCase(c)) {
        newMsg += String.fromCharCode(
          ((c - OFFSET_MAJOR_ALPHABET + keys[j % keys.length]) %
            ALPHABED_LENGTH) +
            OFFSET_MAJOR_ALPHABET
        );
        j++;
      } else if (this.isLowerCase(c)) {
        newMsg += String.fromCharCode(
          ((c - OFFSET_ALPHABET + keys[j % keys.length]) % ALPHABED_LENGTH) +
            OFFSET_ALPHABET
        );
        j++;
      } else {
        newMsg += msg.charAt(i);
      }
    }
    return (this.encrypter
      ? newMsg
      : newMsg.split("").reverse().join("")
    ).toUpperCase();
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
    // Для дешифрования делаем наоборот 26 - 1 = 25 % 26 = 25 (Для дешифрования для ключа "a" делаем на 25 вперёд)
    const keys = this.defineKeys(key).map(
      (k) => (ALPHABED_LENGTH - k) % ALPHABED_LENGTH
    );
    return this.crypt(msg, keys);
  }
}

module.exports = VigenereCipheringMachine;
