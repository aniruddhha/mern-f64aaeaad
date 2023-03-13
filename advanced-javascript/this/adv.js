const person = { 
    fstNm : "abc",
    lstNm : 'pqr',
    flNm : function () {
        return this.fstNm + this.lstNm;
    }
}

console.log(`Original ${person.flNm()}`)
const nwFlNm = person.flNm.call({ fstNm : 'vvv', lstNm : 'bbb' })
console.log(`New Name ${nwFlNm}`)

