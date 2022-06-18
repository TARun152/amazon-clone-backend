const Order = require("../models/orders");
const addOrders=async(req,res)=>{
    let order=new Order(req.body)
    let newOrder=await order.save()
    res.status(200).json(newOrder)
}
const getAllOrders=async(req,res)=>{
    console.log("hey")
    let orders= await Order.find({userId:req.headers.id}).sort({createdOn:-1})
    console.log(orders)
    res.json(orders)
}
module.exports.addOrders=addOrders
module.exports.getAllOrders=getAllOrders