require('dotenv').config();
const mongoose = require('mongoose');
const connecttomongo=async ()=>{
     mongoose.connect(process.env.MONGO_URL,()=>{
        console.log('connected succesfully')
    });
}
module.exports= connecttomongo;