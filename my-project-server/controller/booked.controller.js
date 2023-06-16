const { SearchingBooked, CreateBooked } = require("../services/booked.service");

module.exports.getBooked = async (req, res) => {
  try {
    const result = await SearchingBooked();
    res.send({ result });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports.postBooked = async (req, res) => {
  try {
    const body = req.body;
    const result = await CreateBooked(body);
    res.send({
      data: result,
    });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
