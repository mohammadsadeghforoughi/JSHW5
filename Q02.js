const phoneNumberValidator = (phoneNumber) => {
    phoneNumber = '0' + phoneNumber
    const phoneNumberLength = phoneNumber.length
    const isFirstTwoDigits = phoneNumber.substring(0, 2)
    if (phoneNumberLength === 11 && isFirstTwoDigits === '09') {
        return `Phone number is valid`
    } else {
        return `Phone number is unvalid`
    }
}

// Test
console.log(phoneNumberValidator(09120000000))
console.log(phoneNumberValidator(08120000000))
console.log(phoneNumberValidator(19120000000))

