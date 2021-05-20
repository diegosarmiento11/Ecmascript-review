// Arrow functions

// Objects array...

const names = [
    {name: 'diego', age: '23'},
    {name: 'felo', age: '25'}
]

// Before using anonymous functions

let listOfNames = names.map( function(item) {
    console.log(item.name)
})

// Using arrow functions

let listOfNames2 = names.map( item => console.log(item.age))

// Map method always return an anonymous callback so it is needed at leat 1 param.