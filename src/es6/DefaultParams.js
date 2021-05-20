// Default params

// Before

function newFunction(name, country, age) {
    var name = name || 'angel'
    var country = country || 'colombia'
    var age = age || '23'
    console.log(name, country, age)
}

// After

// Now we can set values to our params by default initializating them into the function

function newFunction2 (name = 'diego', country = 'colombia', age = '23' ) {
    console.log(name, age, country)
}

newFunction2();
newFunction2('leo', 'australia', '31')
