const encryptor = require('../util/encryptor')
const errorResp = require('../util/errorsResponses')

/*
    Handler for dummy requests.
    Expects JSON-formatted post requets.
*/

module.exports = (req, res) => {
    const body = req.body

    /* Validate Input */
    // check key
    if (body.key.length < 1)
        return errorResp.failInvalidInput(res, "key")
    
    // check message
    if (body.message.length < 1)
        return errorResp.failInvalidInput(res, "message")

    /* Process request */
    // encrypt the message
    const encryptedMessage = encryptor.encrypt(body.message, body.key)

    /* Respond to caller */
    // respond with the encryped key
    res.json({ 
        message: encryptedMessage
    });
}

