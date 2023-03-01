class Config { 
    #usNm  
    #pass

    constructor(usNm, pass) {
        this.#usNm = usNm // it is private to class
        this.#pass = pass // it is private to class
    }

    printCreds() {
        console.log(`UserName ${this.#usNm}, Password ${this.#pass}`)
    }

    get usNm() {
        return this.#usNm
    }
}

class DbConfig extends Config { }

class NwConfig extends Config { }

const cfg = new Config('abc', 'pqr')
console.log(`Outside`)
console.log(`UserName ${cfg.usNm}, Password ${cfg.pass}`)
cfg.printCreds()
