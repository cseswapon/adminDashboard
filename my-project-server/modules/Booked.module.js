const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: String,
  name: String,
  email: String,
    quantity: Number,
  price:String
});

const Booked = mongoose.model("Booked", schema);

module.exports = Booked;
