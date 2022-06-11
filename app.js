const connect= require('./db')
connect();
const cors=require('cors')
const express = require('express')
const helmet=require('helmet')
const morgan=require('morgan')
const app = express()
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.get('/',(req,res)=>{
    res.send("working")
})
require("./routes/user")(app);
require("./routes/stripe")(app);
const PORT=process.env.PORT||5000
app.listen(PORT)