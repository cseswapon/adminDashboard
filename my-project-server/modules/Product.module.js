const validator = require("validator");
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    image: String,
    price: String,
    description: String,
    brand:String,
})

const Product = mongoose.model("Product", schema);

module.exports = Product;