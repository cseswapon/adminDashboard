const express = require("express");
const Product = require("../modules/Product.module");
const route = express.Router();

route
  .route("/")
  .get(async (req, res) => {
    const result = await Product.find({});
    res.send({ result });
  })
  .post(async (req, res) => {
    const body = req.body;
    const response = await Product.create(body);
    res.send({
      result: response,
    });
  });
route.get("/:id", async (req, res) => {
    const {id} = req.params;
  const result = await Product.findOne({ _id: id });
  res.send({
    data: result,
  });
});
module.exports = route;
