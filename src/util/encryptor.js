const Cryptr = require('cryptr')

/*
    Module for offering encryption functions.
*/
module.exports = {
    encrypt: (message, key) => {
        const cryptr = new Cryptr(key)
        const encryptedMessage = cryptr.encrypt(message)
        
        return encryptedMessage
    }
}