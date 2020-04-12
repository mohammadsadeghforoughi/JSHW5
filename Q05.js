const generateRandom = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start)
}

console.log(generateRandom(10000, 59999))