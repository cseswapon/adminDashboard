const express = require("express");
const Booked = require("../modules/Booked.module");
const route = express.Router();

route
  .route("/")
  .get(async (req, res) => {
    const result = await Booked.find({});
    res.send({ result });
  })
  .post(async (req, res) => {
    const body = req.body;
    const result = await Booked.create(body);
    res.send({
      data: result,
    });
  });

module.exports = route;
