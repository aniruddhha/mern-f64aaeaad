class Animal {

    constructor() { //state -> variables
        this.legs = 4
        this.eyes = 2
    }

    walk(dt) { //behaviour -> function
        this.legs += 2
        console.log(` ${dt} is Walking`)
    }

    run() {
        this.legs += 5
        console.log(`Animal is Running`)
    }

    sleep() {
        this.eyes = 0
        console.log(`Animal is Sleeping`)
    }
}

const ab = 10
const pq = 20


const tiger = new Animal()
tiger.run('tiger')
tiger.sleep()
tiger.walk('tiger')


function run(dt) {
    console.log('You passed')
}

run('abc')
