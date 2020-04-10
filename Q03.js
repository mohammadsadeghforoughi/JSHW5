const userNameValidator = (userName) => {
    const userNameLength = userName.length
    const isDotted = userName.includes('.')
    const isHyphend = userName.includes('_')

    if (isDotted && isHyphend && (userNameLength > 3 && userNameLength < 9)) {
        return `Username is valid`
    } else {
        return `Username is unvalid`
    }
}

// Test
console.log(userNameValidator('m.d_reza'))
console.log(userNameValidator('mohammad_re.za'))
console.log(userNameValidator('mohammad_reza'))
console.log(userNameValidator('m_r'))