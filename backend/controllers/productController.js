const Product = require("../models/productModel");

// Create Product -- admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// GET ALL PRODUCT
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  req.status(200).json({ success: true, products });
};
