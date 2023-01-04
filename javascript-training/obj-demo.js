// lets park it for later use
const dt = new Date() // object of class

const ob1 = {} // object litral notation
const ob2 = {
    'one': 1,
    'two': 2.0,
    cb: () => console.log('Called'),
    arr: [1, 3, 5, 9],
    ob: {
        dt: '2023-01-01'
    },
    st: new Set()
}
console.log(ob2)
console.log(`One ${ob2.one}`)
console.log(`Arr ${ob2['arr']}`)
console.log(`Dt ${ob2.ob.dt}`)
console.log(`Dt ${ob2['ob']['dt']}`)

const ob3 = { a: 1, c : 9, d : 7, e : 5, f : 2, g : 4 }
console.log(ob3)
ob3.b = 10
console.log(ob3)

for (let key in ob3) {
    console.log(`key = ${key}, value = ${ob3[key]}`)
}

const ob3Keys = Object.keys(ob3)
console.log(ob3Keys)

const ob3Values = Object.values(ob3)
console.log(ob3Values)
