//This formula doesn't include the leap years so technicaly it is inaccurate but it is the closest approximate

const G2J = (date) => {
    const now = new Date(date)
    now.setDate(now.getDate() + 12)
    now.setFullYear(now.getFullYear() - 621)
    now.setMonth(now.getMonth() - 3)
    return now
}

console.log(G2J('2018-5-28'))