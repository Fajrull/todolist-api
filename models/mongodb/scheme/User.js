const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
});

const User = mongoose.model("User", Schema);

module.exports = User;
