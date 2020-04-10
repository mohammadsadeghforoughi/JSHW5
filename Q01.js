const emailValidator = (email) => {
    const atSignValid = email.includes('@')
    const dotComValid = email.toLowerCase().includes('.com')
    const dotIrValid = email.toLowerCase().includes('.ir')

    if ((atSignValid && dotComValid) || (atSignValid && dotIrValid)) {
        return `Email is Valid`
    } else {
        return `Emial is unvalid`
    }
}

// Test
console.log(emailValidator('hello@gamilcom'))
console.log(emailValidator('hello@gamil.com'))