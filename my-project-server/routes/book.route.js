const express = require("express");
const { getBooked, postBooked } = require("../controller/booked.controller");
const route = express.Router();

route
  .route("/")
  .get(getBooked)
  .post(postBooked);

module.exports = route;
