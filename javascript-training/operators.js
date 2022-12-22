const a = 10
const b = 20
let x = 10

console.log('Equality ' + (a == b))
console.log('Not Equals ' + (a != b))
console.log('GT ' + (a > b))
console.log('GTE ' + (a >= b))
console.log('LT ' + (a < b))
console.log('LTE ' + (a <= b))

console.log('Subtract ' + (a - b))
console.log('Add ' + (a + b))
console.log('Post Inc ' + (x++)) // x = x + 1
console.log('Pre Inc ' + (++x))
console.log('Exponent ' + (a ** x))

console.log('Bitwise And '+ (a & 1))
console.log('Bitwise Or '+ (a | 1))
console.log('Shift Operators '+ (a >> 1))
console.log('Shift Operators '+ (a << 1))

console.log('Logical And 1 : '+ (10 && 1))
console.log('Logical And 0 : '+ (10 && 0))
console.log('Logical Or 0 : '+ (10 || 0))
console.log('Logical Or 1 : '+ (0 || 1))

const st = (a > 10) ? '✅ Success' : '❌ Fail'
console.log('Ternary Operator : '+ st)

const nums = [ 1, 3, 4, 6, 10 ]
console.log(' Relational Array In :  ' + (a in nums))
const obj = { 
    1 : 'abc', 
    2 : 'acc', 
    10 : 'xyz' 
}
console.log( 'Relation Object In : ' + (a in obj) )

const dt = new Date()
console.log( ' Date Instance : ' + (dt instanceof Date))

const y = null
if( y == null) console.log('❌ Y is Null')
else console.log(y)

console.log(' ?? : ' + ( y ?? '❌ Y is Null'))





