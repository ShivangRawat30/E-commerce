const Product = require("../models/productModel");

// Create Product
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

exports.getAllProducts = (res, req) => {
  req.status(200).json({ message: "Route is working fine" });
};
