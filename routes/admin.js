const express = require("express");
const router = express.Router();
const path = require("path");
const { mainDirectory } = require("../utils/path");

router.use("/add-product", (req, res) => {
  res.sendFile(path.join(mainDirectory, "../", "views", "add-product.html"));
});

//if we try to access it using get method we will be redirected to /
router.post("/product", (req, res) => {
  console.log(req.body);
  res.send(`<p> ${req.body["title"]} added`);
});

module.exports = router;
