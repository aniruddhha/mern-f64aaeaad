
// object accessors

const person = {
    fstNm : "abc",
    lstNm : 'pqr',
    age : 30,
    sal : 3000,

    get displayFstNm() {
        return this.fstNm
    },

    set setFstNm(nm) {
        this.fstNm = nm
    },

    get salToText() {
        // it should convert it to text

        return 'Three Thousand Only'
    }
}

person.setFstNm = 'abc'
console.log(person.displayFstNm)