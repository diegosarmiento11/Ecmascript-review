// Destructuring

// You can acces to the key and value adding .value to the var object.

let person = {
    name: 'diego',
    age: '23',
    country: 'colombia'
}

console.log(person.name, person.age)

// You can acces directly to the param using destructuring, so it is not necessary to call .value into the debugging process

let {name, age, country} = person

console.log(name, age, country)