const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(modification = true) {
    this.modification = modification;
  };

  modify (message, key, action) {
    if (!message || !key) throw Error;

    let messageUP = message.toUpperCase();
    let keyUP = key.toUpperCase();

    let nonAlph = 0;
    let result = '';

    for (let i = 0; i < messageUP.length; i++) { 	      
      let messageIndex = this.alphabet.indexOf(messageUP[i]);
      let keyIndex = this.alphabet.indexOf(keyUP[i - nonAlph >= keyUP.length ? parseInt((i -nonAlph) % keyUP.length) : i - nonAlph]);
      keyIndex = (action === 'decrypt' ? (-keyIndex) : keyIndex);
      let char = 
        messageIndex === -1 
        ? (nonAlph++, messageUP[i])
        : this.alphabet[(this.alphabet.length + messageIndex + keyIndex) % this.alphabet.length];
      result += char;
    };
    return this.modification ? result : result.split('').reverse().join(''); 
  };

  encrypt (message, key) { 
    return this.modify(message, key); 
  } ;  

  decrypt(encryptedMessage, key) {
    return this.modify(encryptedMessage, key, 'decrypt'); 
  };
};

module.exports = VigenereCipheringMachine;
