const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const admin = require("./admin");

router.get("/", (req, res, next) => {
  console.log(admin.data);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
