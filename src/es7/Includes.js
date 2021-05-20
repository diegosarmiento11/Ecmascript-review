// Includes


// You can use Includes to validate the existance of a value into an array. It is a nice way to know if a value exist.

let numbers = [ 1, 2, 3 ]

if(numbers.includes(3)){
    console.log('incluye el 3')
} else {
    console.log('No lo incluye pa')
}

console.log(numbers.includes(2))


// Before includes we were using

const arr = [1, 2, 3, 4, 5];

arr.indexOf(1) !== -1; // true
arr.indexOf(10) !== -1; // false