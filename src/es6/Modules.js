// Modules

// Because of code runner plugins that run node.js this excercise cant be deployed here, but, in a real project using Babel, it runs normally.


import { hello } from './Modules';

const hello = () => 'hello'

console.log(hello())

export default hello;


// Node.js

//import
const hello = require("./module");

// export
module.exports = hello;

