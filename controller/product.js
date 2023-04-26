const path = require("path");
const rootDir = require("../util/path");
const Product = require("../models/product");

exports.addProduct = (req, res, next) => {
  const newProduct = new Product(req.body.title);
  newProduct.save();
  res.redirect("/");
};

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.getAllProducts = (req, res, next) => {
  const allProducts = Product.getAll();
  res.render("shop", {
    products: allProducts,
    docTitle: "Shop",
    path: "/",
    hasProducts: allProducts.length > 0,
  });
};
