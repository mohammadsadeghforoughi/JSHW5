const list = [{
    a: 'A'
}, {
    b: 'B'
}, {
    c: 'C',
    d: 'D'
}, {
    e: 'E',
    f: 'F',
    g: 'G'
}]

console.log(Object.assign({}, ...list));