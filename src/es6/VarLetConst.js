// Global variables


// Let variables only aplies to local scope. it is important to keep them locally because you may accidentaly modify values from global variables and that could change your app.

{
    var diego = 'diego'
}

{
    let diego2 = 'diego'
    console.log(diego2)
}

// Const variables are block scope so they only aplies to local scope. Besides,
// constant variables cant be redeclared.

const diego3 = 'diego'

console.log(diego)