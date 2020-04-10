var validator = require('email-validator')


const isValid = (email) => {
    return validator.validate(email)
}

// console.log(isValid('hello@.com'))
// console.log(isValid('hello@gmail.com'))