const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
  userId: { type: String },
  task: { type: String },
  created_date: { type: Date },
  updated_date: { type: String },
});

const TodoList = mongoose.model("TodoList", Schema);

module.exports = TodoList;
