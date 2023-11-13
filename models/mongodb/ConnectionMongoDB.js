const mongoose = require("mongoose");

const url =
  "mongodb+srv://fajrul:fajrul123@cluster0.5uaersu.mongodb.net/TodoList";

const ConnectionDB = async () => {
  try {
    const Connect = await mongoose.connect(url);
    console.log(`Mongo Connected : ${Connect.connection.host}`);
  } catch (error) {
    console.log(error);
    // process.exit(1)
  }
};

module.exports = ConnectionDB;
