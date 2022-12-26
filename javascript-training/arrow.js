function mkSqr(n) { // traditional way of function representation
    // console.log(this) // global object
    return n * n
}
const sq1 = mkSqr(10)

const anSqr = function(n) { // anonymus function
    return n * n
}
const sq2 = anSqr(10)

const arrw1 =(n) => { // arrow function
    console.log(this) // points wrapping class object
    return n * n
}
const sq3 = arrw1(10)

const arrw2 = n => n * n // arrow function
const sq4 = arrw2(10)




