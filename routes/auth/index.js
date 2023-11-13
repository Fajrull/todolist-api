const express = require("express");
const routes = express.Router();

// Controllers
const AuthController = require("../../controllers/auth/auth");

// Middleware
const AuthMiddleware = require("../../middlewares/authentication/bodyValidation");

routes.get("/", (req, res) => {
  res.send("Welcome to login!");
});

routes.post(
  "/register",
  AuthMiddleware.bodyValidationRegister,
  AuthController.Register
);

routes.post("/login", AuthController.Login, AuthMiddleware.bodyValidationLogin);

module.exports = routes;
