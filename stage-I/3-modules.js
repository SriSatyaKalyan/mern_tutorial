//modules - encapsulated code
//Node uses CommonJS behind the scenes. And every file is a module.

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

console.log(data);

//When we have a function inside the module that we invoke, we can run it even if we don't export it
require("./7-mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

// console.log(__dirname);

// this prints "hello world" every 1000ms
// setInterval(() => {
// 	console.log("hello world");
// }, 1000);
