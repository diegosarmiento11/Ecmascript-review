// Object entries method

// Object entries is created with the main purpose of create an array of another object. As an array you can use lentgh - find - map methods to manipulate them.

// Object.entries() method is used to return an array consisting of enumerable property [key, value] pairs of the object which are passed as the parameter. The ordering of the properties is the same as that given by looping over the property values of the object manually.


let work = {
    legal: ' lawyer',
    rrhh: 'rh',
    it: 'engineers'
}

let workEntries = Object.entries(work)

console.log(workEntries)
console.log(workEntries.length)