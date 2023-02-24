class Animal {

    constructor() { //state -> variables
        this.legs = 4
        this.eyes = 2
    }

    walk(dt) { //behaviour -> function
        const res = 10
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


const tiger1 = new Animal()
tiger1.run('tiger')
tiger1.sleep()
tiger1.walk('tiger')

const tiger2 = new Animal()
tiger2.run('tiger')
tiger2.sleep()
tiger2.walk('tiger')


function run(dt) {
    console.log('You passed')
}

run('abc')
