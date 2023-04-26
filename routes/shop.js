const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const productController = require("../controller/product");

router.get("/", productController.getAllProducts);

module.exports = router;
