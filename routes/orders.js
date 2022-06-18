const orderController = require("../controllers/orders");

module.exports = (app) => {
  app.post("/orders/addOrder", orderController.addOrders)
  app.get("/orders/getAllOrder",orderController.getAllOrders)
};