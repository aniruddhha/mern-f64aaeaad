function byPass(a, b, c) {
    console.log(`a = ${a}, b = ${b}, c = ${c}`)
}

// const ob = { a : 1, b : 2, c : 3 }
// byPass(ob.a, ob.b, ob.c)

const arr = [1, 2, 3]
byPass(arr[0], arr[1], arr[2])
byPass(...arr) // spread operator

const arr1 = [7, 8, 9, 10]
byPass(...arr1)

const arr2 = [100, 300]
byPass(...arr2)

function prepare(...prms) { // rest params
    console.log(prms)
}

prepare(1)
prepare(1, 7)
prepare(1, 7, 9, 10)
prepare(1, 7, 7)
prepare(...arr)


// 🎁 Home work - apply property short hand notation
// as per your understanding
function noramDistribution(o) {
    console.log(o)
}