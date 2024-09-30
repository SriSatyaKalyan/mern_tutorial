const express = require("express");
const router = express.Router();

let { people } = require("../data");

router.post("/", (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}
	return res.status(401).send("Invalid Credentials");
});

module.exports = router;
