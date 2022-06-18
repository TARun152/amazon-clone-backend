const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId:{
        type: String
    },
    orderId:{
        type: String
    },
 orders:{
     type: Array,
     default: []
 },
 amount:{
    type: String
 },
 createdOn:{
     type: String
 }
});

module.exports = mongoose.model("Orders", orderSchema);