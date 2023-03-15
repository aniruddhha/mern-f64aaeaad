// this is representing an object
function Person(fn, ln, ag, sl) {
    this.fstNm = fn
    this.lstNm = ln
    this.age = ag
    this.sal = sl
}

const obj = new Person('abc', 'pqr', 12, 30)
console.log(obj)

