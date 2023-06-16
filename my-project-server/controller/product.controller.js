const {
  findProduct,
  createProduct,
  singleProduct,
} = require("../services/product.service");

module.exports.getProduct = async (req, res) => {
  try {
    const result = await findProduct();
    res.send({ result });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports.postProduct = async (req, res) => {
  try {
    const body = req.body;
    const response = await createProduct(body);
    res.send({
      result: response,
    });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports.getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await singleProduct(id);
    res.send({
      data: result,
    });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
