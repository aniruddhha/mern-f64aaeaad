console.log(this)
const out = this // it will point to global window object

function demo() {
    console.log(this)
    const ins = this // it will point to global window object
    console.log(out == ins)
    console.log(typeof(out))
    console.log(out instanceof Window)
}

demo()

class Car {
    speedUp() {
        const cls = this // it will not point to global window object, it will point to current object
        console.log(this)
        console.log(out === cls)
        console.log(typeof(cls))
        console.log(cls instanceof Car)
    }
}

const cr = new Car();
cr.speedUp()