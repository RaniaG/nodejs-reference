const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { mainDirectory } = require("../utils/path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//this middleware parses the request body into key value object
app.use(bodyParser.urlencoded());

//this always runs
app.use("/", (req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/shops", shopRoutes);
//all child routes should start with /admin
app.use("/admin", adminRoutes);

//wildcard default matches all routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(mainDirectory, "views", "not-found.html"));
});

app.listen(3000);

module.exports = app;
