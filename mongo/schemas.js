const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cats = new Schema({
  name: String,
  breed: String,
  age: String
});

module.exports = { Cats };
