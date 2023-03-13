/**
 * 
 * The call method is used to call a function with a 
 * specified this value and arguments provided 
 * individually. The first argument to call, sets 
 * the this value and any subsequent 
 * arguments are passed to the function as 
 * individual arguments.
 * 
 */
const person = { 
    fstNm : "abc",
    lstNm : 'pqr',
    flNm : function (p1, p2) {
        return this.fstNm + this.lstNm + ' P1 - ' +p1 +' P2 - ' + p2;
    }
}

console.log(`Original ${person.flNm()}`)
const nwFlNm = person.flNm.call({ fstNm : 'vvv', lstNm : 'bbb' }, 'hi', 'hello')
console.log(`Call : New Name ${ nwFlNm }`)

console.log(`Original ${person.flNm()}`)
const newFn = person.flNm.bind({ fstNm : 'ttt', lstNm : 'ooo' })
console.log(`Bind : New Name ${ newFn('hi', 'hello') }`)

console.log(`Original ${person.flNm()}`)
const newPerson = {
    fstNm : "rrr",
    lstNm : 'ppp',
}
const newFlNm = person.flNm.apply(newPerson, ['hi', 'hello'])
console.log(`Apply : New Name ${ newFlNm }`)
