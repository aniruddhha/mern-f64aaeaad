const arr = ['abc', 'pqr', 'imn', 'jkl']
//          0, 1, 2, 3, 
const zthEl = arr[0] // positions will be till 3
console.log('Zeroth Element '+zthEl)
const ttlEls = arr.length // 4
console.log('Total Count of Elements '+ ttlEls)
console.log('Fifth Element '+ arr[6])

// for(let i = 0; i< arr.length; i++) {
//     const el = arr[i]
//     console.log('Pos -> '+ i +' Element -> ' +el)
// }
// make uppercase of all

for(let i = 0; i< arr.length; i++) {
    const el = arr[i].toUpperCase()
    console.log('Upper -> ' + el +' Original -> '+ arr[i])
}

 // abc => ABC