x = 89 // ❌ bad way of defining variable
var a = 20 // older js -> covert to let
let b = 30 // es6 -> scoping is considered
const c = 50 // es6
// c = 90 // not possible

let z = 90
let Z = 90
if(true) {
    let z = 89
    z = 78
}
console.log(z)

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _
// Names are case sensitive
// Reserved words (like JavaScript keywords) cannot be used as names.

const _1232345 = 10
const fn = 90

// you practice -> dont upload to git -> ❌ you didnt practice
// you practice -> uploaded to git -> ✅ you actually practice
