const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUser } = require("../services/login.service");

module.exports.userLogin = async (req, res) => {
  try {
    // console.log(req.body.email);
    const { email,contactNumber, password } = req.body;
    const user = await findUser(contactNumber);
    if (user) {
      const isValidPass = await bcrypt.compare(password, user.password);
      if (isValidPass) {
        const token = jwt.sign(
          {
            userId: user._id,
            username: email,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          access_token: token,
          data: {
            email: user.email,
            personalName: user.personalName,
            contactNumber: user.contactNumber,
            role: user.role,
          },
          message: "Login Successfully",
        });
      } else {
        res.status(401).json({
          error: "Authentication failed",
        });
      }
    } else {
      res.status(401).json({
        error: "Authentication failed",
      });
    }
  } catch (err) {
    res
      .status(540)
      .send({ message: "something went wrong", error: err.message });
  }
};
