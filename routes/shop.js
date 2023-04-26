const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const admin = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", {
    products: admin.data,
    docTitle: "Shop",
    path: "/",
    hasProducts: admin.data.length > 0,
  });
});

module.exports = router;
