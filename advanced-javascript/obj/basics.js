const person = {
    fstNm : "abc",
    lstNm : 'pqr',
    age : 30,
    sal : 3000,
}

const str = 'lstNm'
console.log(person.fstNm)
console.log(person['fstNm'])
console.log(person[str])