const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(parameter) {
    this.parameter = parameter;
    this.squareShading = {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy",
    };
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("THROWN");
    }

    message = message.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    let encryptedText = "";
    let specialCharacterCount = 0;

    for (let i = 0; i < message.length; i++) {
      let keyLetter = (i - specialCharacterCount) % key.length;
      let keyIndex = this.squareShading.a.indexOf(key[keyLetter]);

      if (this.squareShading[message[i]]) {
        encryptedText += this.squareShading[message[i]][keyIndex];
      } else {
        encryptedText += message[i];
        specialCharacterCount++;
      }
    }

    return this.parameter === undefined || this.parameter === true
      ? encryptedText.toUpperCase()
      : encryptedText.toUpperCase().split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("THROWN");
    }

    encryptedMessage = encryptedMessage.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    let decryptedText = "";
    let specialCharacterCount = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let keyLetter = (i - specialCharacterCount) % key.length;
      let keyRow = this.squareShading[key[keyLetter]];

      if (keyRow.indexOf(encryptedMessage[i]) !== -1) {
        decryptedText += this.squareShading.a[keyRow.indexOf(encryptedMessage[i])];
      } else {
        decryptedText += encryptedMessage[i];
        specialCharacterCount++;
      }
    }

    return this.parameter === undefined || this.parameter === true
      ? decryptedText.toUpperCase()
      : decryptedText.toUpperCase().split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
