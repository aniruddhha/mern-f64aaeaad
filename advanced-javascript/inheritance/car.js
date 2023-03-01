class Car { // parent 
    constructor(speed) {
        this.speed = speed
    }

    increaseSpeed() {
        this.speed += 10
    }

    get crSpd() {
        return this.speed
    }

    set crSpd(speed) {
        this.speed = speed
    }
}

// bmw is a car -> is a relationship
class Bmw extends Car { // child
    constructor(speed, isAuto) {
        super(speed)

        this.isAuto = isAuto
    }

    enableAutoMode() {
        this.isAuto = true
    }
}

class Audi extends Car {  }

const cr = new Car(12)
console.log(cr)
cr.speed = 90 // bad
cr.crSpd = 10 // good
console.log(cr.crSpd)

const bmw = new Bmw(200, true)
console.log(bmw)
bmw.speed = 10
bmw.increaseSpeed()
bmw.enableAutoMode()

function identifyCar(c = new Car()) {
    c.increaseSpeed()
}

identifyCar(cr)
identifyCar(bmw)

console.log(cr instanceof Car) // cr is on which type ?
console.log(bmw instanceof Car) // bmw is of which type



