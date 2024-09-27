const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, ".", second);

//if the file is not present, node will create one
//if it is present, it would override it
writeFileSync(
	"./content/result-sync.txt",
	`Here is the result: ${first}, ${second}`,
	//the below flag allows appending to the pre-existing content in the file
	{ flag: "a" }
);
console.log("done wth this task");
console.log("starting next task");
