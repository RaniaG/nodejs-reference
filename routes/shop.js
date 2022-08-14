const express = require("express");
const { mainDirectory } = require("../utils/path");
const path = require("path");
const router = express.Router();

//this will not work as wildcard because its a get method and it will do an exact match
//so order wont matter if its at the top or bottom
router.get("/", (req, res) => {
  res.sendFile(path.join(mainDirectory, "views", "shop.html"));
});

module.exports = router;
