const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //This semicolon here is unbelievably needed. I dont know why
        [array[i], array[j]] = [array[j], array[i]]
    }
}

let list = [1, 2, 3, 4, 5]

shuffle(list)

console.log(list)

