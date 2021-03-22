
module.exports = {
    /*
        Function that returns an error. Used if
        provided input is invalid.

        @param res - the express response object of the request
        @param field - the form field that cotained invalid input
    */
    failInvalidInput: (res, field) => {
        res.status(400).json({
            e: "invalid input",
            field: field
        })
    }
}