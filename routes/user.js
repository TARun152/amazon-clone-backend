const authController = require("../controllers/user");

module.exports = (app) => {
  app.post("/signUp", authController.addUser);
  app.post("/login", authController.getUser);
  app.get("/verify",authController.verifyUser);
};