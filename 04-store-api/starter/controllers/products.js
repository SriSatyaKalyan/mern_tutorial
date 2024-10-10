const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({ featured: true });
	// throw new Error("testing async errors");
	res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
	res.status(200).json({ msg: "products route" });
};

module.exports = {
	getAllProducts,
	getAllProductsStatic,
};
