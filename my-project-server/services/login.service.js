const Register = require("../modules/register.module");

module.exports.findUser = (contactNumber) => {
  return Register.findOne({ contactNumber });
};
