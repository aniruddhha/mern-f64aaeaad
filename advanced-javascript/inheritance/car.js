class Car { // parent 
    constructor(speed) {
        this.speed = speed
    }

    increaseSpeed() {
        this.speed += 10
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

const cr = new Car(12)
console.log(cr)

const bmw = new Bmw(200, true)
console.log(bmw)
bmw.speed = 10
bmw.increaseSpeed()
bmw.enableAutoMode()


