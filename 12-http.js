const http = require("http");

//webserver keep listening to the requests
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Hello World!");
		return;
	}
	if (req.url === "/about") {
		res.end("This is short history!");
		return;
	}
	res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page!!</p>
        <a href='/'>back home!</a>
        `);
	return;
});

server.listen(6060);
