const validator = require("validator");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    personalName: {
      type: String,
      trim: true,
      require: [true, "Please Provide a Personal Name"],
      minLength: [3, "Min Length is 3, got {VALUE}"],
      maxLength: 100,
    },
    contactNumber: {
      type: String,
      require: true,
      unique: [true, "Please Provide Unique Email"],
      maxLength: 11,
    },
    email: {
      type: String,
      require: true,
      validate: [validator.isEmail, "Please Provide Your Valid Email"],
      lowercase: true,
      message: "Email {VALUES}",
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "user"],
        message: "user can't be {VALUES}, must be admin/user",
      },
      default: "user",
    },
  },
  { timestamps: true }
);

const Register = mongoose.model("Register", schema);

module.exports = Register;
