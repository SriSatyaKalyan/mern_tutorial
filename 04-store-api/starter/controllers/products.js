const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({}).sort("name");
	res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
	const { featured, company, name, sort, fields } = req.query;
	const queryObject = {};

	if (featured) {
		queryObject.featured = featured === true ? true : false;
	}

	//similar to above code for featured except different syntax
	company ? (queryObject.company = company) : null;
	name ? (queryObject.name = { $regex: name, $options: "i" }) : null;

	let result = Product.find(queryObject);
	if (sort) {
		const sortList = sort.split(",").join(" ");
		result = result.sort(sortList);
	} else {
		result = result.sort("createdAt");
	}

	const fieldList = fields ? fields.split(",").join(" ") : " ";
	result = result.select(fieldList);

	const products = await result;

	res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
	getAllProducts,
	getAllProductsStatic,
};
