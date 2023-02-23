var nm = 'abc'

// this class is achieving following things
// 👉 Addressing scoping concern
// 👉 Encapsulating in one class
class DateUtil { // class template 

    // class is the entity which encapsulates, 
    // state(data/members) and behaviour(methods/functions)
    constructor() {
        this.date = '2023-02-23' 
        // what do you mean by this ?
        // member variable
        // state
    }

    setDate(dt) { // method of class -> behaviour
        this.date = dt
    }

    printDate() {
        console.log(this.date)
    }

    plus(days) {

    }

    minus(days) {

    }
}

