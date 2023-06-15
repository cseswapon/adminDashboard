const express = require("express");
const { userLogin } = require("../controller/login.controller");
const { userCreate } = require("../controller/Register.controller");
const Register = require("../modules/register.module");
const route = express.Router();

route.route("/singup").post(userCreate);
route.post("/login", userLogin);

route.get("/users", async (req, res) => {
  const result = await Register.find({});
  res.send({
    data: result,
  });
});

route.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Find the user by ID and delete
    await Register.findByIdAndDelete(userId);

    res.send({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while deleting the user",
    });
  }
});


module.exports = route;
