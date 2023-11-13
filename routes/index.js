const express = require("express");
const routes = express.Router();

// Routes
const UserRoutes = require("./auth/index");
const TodoListRoutes = require("./todolist/index");

routes.get("/", (req, res) => {
  res.send("Welcome to api v1 routes!");
});

routes.use("/auth", UserRoutes);
routes.use("/todolist", TodoListRoutes);

module.exports = routes;
