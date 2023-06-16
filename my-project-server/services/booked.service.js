const Booked = require("../modules/Booked.module");

module.exports.SearchingBooked =async () => {
    return await Booked.find({});
}

module.exports.CreateBooked = async (data) => {
    return await Booked.create(data);
}