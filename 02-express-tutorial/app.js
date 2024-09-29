const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
//static asset - file that server does not have to change, left in a specific folder
//img file, style file, js file
app.use(express.static("./public"));

app.get("/", (req, res) => {
	console.log("user hit the resource");

	//index.html can be added to static assets or Server Side Rendering
	// res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
	res.status(404).send("<h1>resource not found</h1>");
});

app.listen(6060, () => {
	console.log("server is listening on port 5000...");
});

//app.get
//app.post
//app.put
//app.delete
