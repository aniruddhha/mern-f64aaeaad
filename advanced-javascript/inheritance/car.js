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
    
}

const cr = new Car(12)
cr.speed = 10
cr.increaseSpeed()

const bmw = new Bmw()
bmw.increaseSpeed()


