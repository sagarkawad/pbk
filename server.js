const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/products", (req, res) => {
  res.render("products");
});

app.get("/contactus", (req, res) => {
  res.render("contactus");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is listening on port 3000");
});
