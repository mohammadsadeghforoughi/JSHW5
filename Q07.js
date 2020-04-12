const map = (range1, range2, number) => {
    if (number >= range1[0] && number <= range1[1]) {
        range2[0] -= 1
        range1[0] -= 1
        return range2[0] + ((number - range1[0]) * (range2[1] - range2[0])) / (range1[1] - range1[0])
    } else {
        return `Number isn't in the range`
    }
}

console.log(map([1, 80], [30, 99.5], 3))
console.log(map([1, 100], [1, 5], 70))