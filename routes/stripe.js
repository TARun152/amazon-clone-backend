const stripeController = require("../controllers/stripe");

module.exports = (app) => {
  app.post("/payment/create", stripeController.getClientSecret);
};