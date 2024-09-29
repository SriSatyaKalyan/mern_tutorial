const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
//static asset - file that server does not have to change, left in a specific folder
//img file, style file, js file

const logger = require("./logger.js");
const authorize = require("./authorize.js");
app.use([logger, authorize]);

//Here logger is the middleware
app.get("/", (req, res) => {
	res.send("Home");
});

app.get("/about", (req, res) => {
	res.send("About");
});

app.all("*", (req, res) => {
	res.status(404).send("<h1>resource not found</h1>");
});

app.listen(6060, () => {
	console.log("server is listening on port 6060...");
});

//app.get
//app.post
//app.put
//app.delete
