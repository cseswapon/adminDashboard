const express = require("express");
const { getProduct, getSingleProduct, postProduct } = require("../controller/product.controller");
const route = express.Router();

route
  .route("/")
  .get(getProduct)
  .post(postProduct);
route.get("/:id", getSingleProduct);
module.exports = route;
