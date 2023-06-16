const Register = require("../modules/register.module");

const registerService = async(newBody) => {
  return await Register.create(newBody);
};

const allUsers = async() => {
  return await Register.find({});
}
const findDelete = async(id) => {
  return await Register.findByIdAndDelete(id);
}
module.exports = {
  findDelete,
  allUsers,
  registerService,
};
