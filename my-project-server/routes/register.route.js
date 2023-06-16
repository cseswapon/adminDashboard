const express = require("express");
const { userLogin } = require("../controller/login.controller");
const {
  userCreate,
  allUser,
  deleteUser,
} = require("../controller/Register.controller");
const route = express.Router();

route.route("/singup").post(userCreate);
route.post("/login", userLogin);

route.get("/users", allUser);

route.delete("/users/:id", deleteUser);

module.exports = route;
