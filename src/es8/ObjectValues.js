// Object values method

// //Object.values() Method
// Object.values() method is used to return an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by the object manually is a loop is applied to the properties.


let work = {
    legal: ' lawyer',
    rrhh: 'rh',
    it: 'engineers'
}

let workEntries = Object.values(work)

console.log(workEntries)
console.log(workEntries.length)