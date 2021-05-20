// Promises

// Promises are functions that are builded returning a new Promise validating by boolean if params (resolve, reject) are true, later, when you call the function you have to expect a response, it could be what you expected or not so you need to difine response and error debbugers to show your promise


const myNewPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('lo hicimos');
        } else {
            reject('pailis');
        }
    })
}

myNewPromise()
    .then((response) => console.log(response))
    .catch((error) => console.log(error))