const express = require("express");
const app = express();
const cors = require("cors");
const { checkLogin } = require("./middlewares/checkLogion");
const signupRoute = require("./routes/register.route");
// middleware
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", signupRoute);

// public route test
app.get("/", (req, res) => {
  res.send({ message: "Admin Dashboard API Side Running" });
});

//test:->this route is very secure
app.get("/newService", checkLogin, async (req, res) => {
  res.send({ message: "OK" });
});

// not found route
app.get("*", (req, res) => {
  res.send({ message: `This URL: ${req.url} is not found` });
});

module.exports = app;
