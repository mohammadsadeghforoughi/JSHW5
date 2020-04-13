let list = []

const generateRandom = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start)
}

const uniqueRandom = (start, end) => {
    if (list.length === (end - start + 1)) {
        return `More than range numbers!!!`
    } else {
        let random = generateRandom(start, end)
        if (!list.includes(random)) {
            list.push(random)
        } else {
            while (list.includes(random)) {
                random = generateRandom(start, end)
            }
            list.push(random)
        }
        return random
    }
}

console.log(uniqueRandom(1, 10))
console.log(uniqueRandom(1, 10))
console.log(uniqueRandom(1, 10))
console.log(uniqueRandom(1, 10))
console.log(uniqueRandom(1, 10))
console.log(uniqueRandom(1, 10))
console.log(uniqueRandom(1, 10))
console.log(uniqueRandom(1, 10))
console.log(uniqueRandom(1, 10))
console.log(uniqueRandom(1, 10))
