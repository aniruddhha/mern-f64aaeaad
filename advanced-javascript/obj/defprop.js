const obj1 = { url : 'abc.com' };
console.log(obj1)

Object.defineProperty(obj1, 'refresh', {
    get : function() {
        this.url = 'pqr.com'
    },
    set : function(vl) {
        this.url = vl
    }
} )

console.log(`👉 Before`)
console.log(obj1)
obj1.refresh
console.log(`👉 After`)
console.log(obj1)
obj1.refresh = 'tttt.ooo'
console.log(`👉 After Set`)
console.log(obj1)

console.log(`👉 Before`)
console.log(obj1)
Object.defineProperty(obj1, 'env' ,{ 
    value : 'mac',
    writable : false
})
console.log(`👉 After`)
console.log(obj1)
obj1.env = 'abc'
console.log(obj1)



