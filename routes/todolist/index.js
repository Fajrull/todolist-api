const express = require("express");
const routes = express.Router();

// Controllers
const TodoListController = require("../../controllers/todolist/todolist");

// Middlewares authentication
const TodoListMiddleware = require("../../middlewares/todolist/todoValidation");

// Middlewares authorization
const {
  verifyToken,
  verifyJWTToken,
} = require("../../middlewares/authorization/JWT");

routes.get("/", verifyToken, verifyJWTToken, TodoListController.ReadTodoList);
routes.get(
  "/:id",
  verifyToken,
  verifyJWTToken,
  TodoListController.ReadDetailTodoList
);
routes.post(
  "/",
  verifyToken,
  verifyJWTToken,
  TodoListMiddleware.todoValidation,
  TodoListController.CreateTodoList
);
routes.put(
  "/:id",
  verifyToken,
  verifyJWTToken,
  TodoListController.UpdateTodoList
);
routes.delete(
  "/:id",
  verifyToken,
  verifyJWTToken,
  TodoListController.DeleteTodoList
);
routes.delete(
  "/",
  verifyToken,
  verifyJWTToken,
  TodoListController.DeleteAllTodoList
);

module.exports = routes;
