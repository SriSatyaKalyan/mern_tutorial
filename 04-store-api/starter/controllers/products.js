const { QueryCursor } = require("mongoose");
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({}).sort("name");
	res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
	const { featured, company, name, sort, fields, limit, numericFilters } =
		req.query;
	const queryObject = {};

	if (featured) {
		queryObject.featured = featured === true ? true : false;
	}

	//similar to above code for featured except different syntax
	company ? (queryObject.company = company) : null;
	name ? (queryObject.name = { $regex: name, $options: "i" }) : null;

	if (numericFilters) {
		const operatorMap = {
			">": "$gt",
			">=": "$gte",
			"<": "$lt",
			"<=": "$lte",
			"=": "$eq",
		};
		const regEx = /\b(<|>|<=|>=|=)\b/g;
		let filters = numericFilters.replace(
			regEx,
			(match) => `-${operatorMap[match]}-`
		);

		const options = ["price", "rating"];
		filters = filters.split(",").forEach((item) => {
			const [field, operator, value] = item.split("-");
			if (options.includes(field)) {
				queryObject[field] = { [operator]: Number(value) };
			}
		});
	}

	console.log(queryObject);
	let result = Product.find(queryObject);

	if (sort) {
		const sortList = sort.split(",").join(" ");
		result = result.sort(sortList);
	} else {
		result = result.sort("createdAt");
	}

	const fieldList = fields ? fields.split(",").join(" ") : " ";
	result = result.select(fieldList);

	const page = Number(req.query.page) || 1;
	const skip = (page - 1) * limit;
	result = result.skip(skip).limit(limit ? Number(limit) : 10);

	const products = await result;

	res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
	getAllProducts,
	getAllProductsStatic,
};
