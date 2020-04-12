// const mapper = (range1, range2, number) => {
//     const ratio = (range1[1] - range1[0] + 1) / (range2[1] - range2[0] + 1)
//     return number / ratio
// }

// console.log(mapper([1, 80], [30, 99.5], 3))

function mapRange(baseRange = [1, 100], targetRange = [1, 5], num = 70) {
    const ratio = (targetRange[1] - targetRange[0] + 1) / (baseRange[1] - baseRange[0] + 1);
    console.log(ratio)
    return (num - baseRange[0] + 1) * ratio + targetRange[0] - 1;
}

console.log(mapRange([1, 100], [1, 5], 70))