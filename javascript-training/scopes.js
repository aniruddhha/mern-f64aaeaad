// Global, Module, Function

url = 'local'
const cfg = 'pqr'

cstUpr()

function cstUpr() {
    const nm = 'abc'
    // console.log(this)
    console.log('Inside of Function : '+ nm)
}

// console.log('Outside of Function : '+ nm)

// 6th revision of Js = Es6 says = i will introduce static(lexcial) by means of let and const
var i = 10

if(true) {
    var i = 20
}

console.log(i)