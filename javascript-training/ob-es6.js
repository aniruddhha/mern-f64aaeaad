const ob = { a : 1, b : 2 }
console.log(ob)

const a = 100
const b = 190

ob.a = a
ob.b = b

console.log(ob)

const ob1 = { a, b } // es6
console.log(ob1)

const ob2 = { a : a, b : b } // traditional
console.log(ob2)

const ob3 = { speed : 89, rpm : 100 }
const speed = ob3.speed
const rpm = ob3.rpm
console.log(`1. Speed ${speed}, RPM : ${rpm}`)

const ob4 =  { spd : 90, rp : 78, ptr : 90 }
const { spd, rp } = ob4 // es6
const { ptr } = ob4
console.log(`2. Speed ${spd}, RPM : ${rp}`)
console.log(ptr)

const arr = [1 , 4, 5, 6] 
const oth = arr[0]
const fst = arr[1]
const snd = arr[2]
const thd = arr[3]

const [first, second, third, fourth] = arr
console.log(`1 = ${first}, 2 = ${second}`)