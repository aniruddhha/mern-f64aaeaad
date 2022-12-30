function lineEq(x) {
    // y = x2 + mx + c
    const m = 1.4
    const c = 10

    const y = Math.pow(x, 2) + m * x + c
    return y
}

console.log(`Random Num ${Math.random()}`)
console.log(`Max ${Math.max(0, 2,-1)}`)
console.log(`Max ${Math.min(0, 2,-1)}`)
console.log(`Absolute Value ${Math.abs(-9)}`)
console.log(`Absolute Value ${Math.abs(1)}`)
console.log(`Absolute Value ${Math.abs(0)}`)

console.log(`Sign ${Math.sign(90.90)}`) // => 1
console.log(`Sign ${Math.sign(-78.90)}`) // => -1
console.log(`Sign ${Math.sign(0)}`) // => 0

console.log(`Round of 8 = ${Math.round(8)}`)
console.log(`Round of 9 = ${Math.round(9)}`)
console.log(`Round of 1.8 = ${Math.round(1.8)}`)
console.log(`Round of -1.8 = ${Math.round(-1.8)}`)
console.log(`Round of 1.4 = ${Math.round(1.4)}`)

console.log(`Floor Value 2 = ${Math.floor(2)}`)
console.log(`Floor Value 2.4 = ${Math.floor(2.8)}`)

console.log(`Round Value 3.9 = ${Math.round(3.9)}`)
// less than or equal to its numeric
console.log(`Floor Value 3.9 = ${Math.floor(3.9)}`)
console.log(`Round Value 3.5 = ${Math.round(3.5)}`)

// greater than or equal to its numeric
console.log(`Ceil Value 3.9 = ${Math.ceil(3.9)}`)
console.log(`Floor Value -2.1 = ${Math.floor(-2.1)}`)
console.log(`Ceil Value -2.1 = ${Math.ceil(-2.1)}`)

console.log(`Trunc 45.78 = ${Math.trunc(45.78)}`)
