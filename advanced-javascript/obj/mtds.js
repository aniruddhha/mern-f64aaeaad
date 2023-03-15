console.log(`🔥 Object.create 🔥`)
const person1 = { firstName : 'abc' }
const john = Object.create(person1) // creating object from other object
john.lastName = 'pqr'

console.log(john)
console.log(john.lastName)
console.log(john.firstName)

console.log(`🔥 Object.defineProperties 🔥`)
const person2 = { }
Object.defineProperties(person2, {  // defining multiple properties to empty object
    firstName : { value : 'abc', writable : true  }, // property descriptor
    lastName : { value : 'pqr', writable : true  }
})
console.log(person2)

console.log(`🔥 Object.getOwnPropertyDescriptor 🔥`)
const person3 = { firstName : 'abc' }
const descriptior = Object.getOwnPropertyDescriptor(person3, 'firstName')
console.log(descriptior)

console.log(`🔥 Object.getOwnPropertyNames 🔥`)
const person4 = { firstName: 'John', lastName: 'Doe' };
const properties = Object.getOwnPropertyNames(person4)
console.log(properties)

console.log(`🔥 Object.getPrototypeOf 🔥`)
const person5 = { firstName: 'John', lastName: 'Doe' };
const prototype = Object.getPrototypeOf(person5)
console.log(prototype)

console.log(`🔥 Object.isExtensible 🔥`)
const person6 = { firstName: 'John' }
console.log(Object.isExtensible(person6))

console.log(`🔥 Object.seal 🔥`)
const person7 = { firstName: 'John' }
Object.seal(person7)
person7.lastName = 'Doe'
console.log(person7)
console.log(Object.isSealed(person7))
const descriptior7 = Object.getOwnPropertyDescriptor(person7, 'firstName')
console.log(descriptior7)
// Object.seal() prevents the addition and deletion of properties 
// to an object, but allows modification of existing properties. 
// On the other hand, Object.freeze() not only prevents addition and deletion 
// of properties, but also prevents modifications to existing properties.


/**
 * Object.seal() sets the configurable attribute of all properties to false, 
 * which means that the properties cannot be deleted or reconfigured. 
 * However, Object.freeze() sets both configurable and writable attributes 
 * of all properties to false, which means that the properties cannot be 
 * deleted, reconfigured or modified.
 */

console.log(`🔥 Object.freeze 🔥`)
const person8 = { firstName: 'John' }
Object.freeze(person8)
person8.lastName = 'Doe'
console.log(person8)
console.log(Object.isFrozen(person8))
const descriptior8 = Object.getOwnPropertyDescriptor(person8, 'firstName')
console.log(descriptior8)







