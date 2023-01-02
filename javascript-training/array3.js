const arr = [1, 2, 4, 1, 2, 5]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

console.log(`Original`)
console.log(arr)
console.log(`--- Operations Output ---`)
// arr.forEach( el => console.log(el) )
console.log(`👉 Find Index`)
const ind = arr.findIndex( el => el == 1)
console.log(`Index ${ind}`)

console.log(`👉 Find`)
const el = arr.find(el => el > 3)
console.log(`Element ${el}`)

console.log(`👉 Filter`)
const els = arr.filter(el => el > 3)
console.log(els)

console.log(`👉 Every and Some`)
const ev = arr.every( el => el > 3 )
console.log(`Is Every Element is greater than 3 : ${ev}`)
const sm = arr.some(el => el > 3)
console.log(`Are there some elements, which are greater than 3 : ${sm}`)

console.log(`👉 Map`)
// make a square of each element and return new array
const sqArr = arr.map( el => el * el )
console.log(sqArr)

console.log(`👉 Unshift and Shift`)
const nwLn1 = arr.unshift(56, 90)
console.log(arr)
console.log(nwLn1)

const rmFst = arr.shift()
console.log(arr)
console.log(rmFst)







