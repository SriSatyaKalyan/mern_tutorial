//modules - encapsulated code
//Node uses CommonJS behind the scenes. And every file is a module.

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

console.log(data);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

// console.log(__dirname);

// this prints "hello world" every 1000ms
// setInterval(() => {
// 	console.log("hello world");
// }, 1000);
