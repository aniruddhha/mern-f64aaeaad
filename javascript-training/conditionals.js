
function normalIfElse() {
    const day = 1
    if (day > 0) {
        console.log('Good Day')
    } else {
        console.log('Invalid Day')
    }
}

function ladderIfElse() {
    const marks = 50

    if (marks > 30 && marks < 40) {
        console.log('Fail')
    }
    else if (marks >= 40 && marks <= 50) {
        console.log('Third Class')
    } else {
        console.log('Distinction')
    }
}

function nestedIfElse() {
    const cfg = 10

    if (cfg) {

        if (cfg == 10) {
            console.log('Network Config')
        } else {
            console.log('File Config')
        }
    }
}

function swCs() {
    const day = 1

    switch (day) {
        case 1: {
            console.log('Mon')
            break
        }
        case 2: {
            console.log('Tue')
            break
        }
        default: {
            console.log('Holiday')
        }
    }
}

swCs()


