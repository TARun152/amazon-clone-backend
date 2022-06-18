const authController = require("../controllers/user");

module.exports = (app) => {
  app.post("/auth/signUp", authController.addUser);
  app.post("/auth/login", authController.getUser);
  app.get("/auth/verify",authController.verifyUser);
  app.get("/auth/:id",authController.getUserById)
};