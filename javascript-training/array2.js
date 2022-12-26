// const arr2 = [1, 3, 7, 8, 10, 1, 3 ]
const arr2 = new Array()
arr2.push(1)
arr2.push(10)
arr2.push(3)
arr2.push(7)
arr2.push(8)
arr2.push(1)
arr2.push(3)
arr2.push(null)
arr2.push(undefined)

// for(let n = 0; n < arr2.length; n++) {
//     console.log('n = '+ arr2[n])
// }
// find out index of 10 
// for(let n = 0; n < arr2.length; n++) {
//     if(arr2[n] == 10) {
//         console.log('Index of 10 is '+ n)
//         return
//     }
// }

function chkr(n) {
    return n == 10
}

// cl
const pos1 = arr2.findIndex(chkr)
const pos2 = arr2.findIndex(function(n) {
    return n == 10
})
const pos3 = arr2.findIndex(n => n == 10)

console.log('Index of 10 is -> ' + pos1)
console.log('Index of 10 is -> ' + pos2)
console.log('Index of 10 is -> ' + pos3)