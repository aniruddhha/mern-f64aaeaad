
function avgSum1() { // function is returning another function
    let delta = 10

    // return function() {
    //     return 10 * delta
    // }

    const ret = () => 10 * delta++

    delta = 322

    return ret
}

function avgSum2(sm) { // function is passed as parameter to other function
    sm()
}

const avg1 = avgSum1()
console.log(avg1())
console.log(avg1())
console.log(avg1())
console.log(avg1())

const calcDelta = () => 0.5 // function is assigned to varible
avgSum2(calcDelta)
avgSum2(function() {
    return 0.5
})
avgSum2( () => 0.5 )

