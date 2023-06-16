const Product = require("../modules/Product.module");

module.exports.findProduct = () => {
  return Product.find({});
};

module.exports.createProduct = (data) => {
  return Product.create(data);
};

module.exports.singleProduct = (id) => {
  return Product.findOne({ _id: id });
};
