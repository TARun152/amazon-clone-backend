const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const addUser = async (req, res) => {
    console.log(req.body)
    var user= await User.findOne({email:req.body.email})
    if(user)
      return res.json({msg:"User already exist with this name"})
    req.body.password = await bcrypt.hash(req.body.password, 10)
    var member=new User(req.body)
    let newMember=await member.save()
    let webtoken= jwt.sign({ _id: newMember._id }, process.env.SECRET_KEY)
    res.status(200).json({token:webtoken})
};

const getUser = async (req, res) => {
    console.log(req.body)
    var user= await User.findOne({email:req.body.email})
    console.log(user)
    if(!user)
    {
    return res.json({ msg: "invalid email or password" })
    }
  var istrue = await bcrypt.compare(req.body.password,user.password)
  if(!istrue)
  {
    return res.json({ msg: "invalid email or password" })
  }
    // creating jwt token
  let webtoken= jwt.sign({ _id: user._id }, process.env.SECRET_KEY)
  res.status(200).json({user:user,token:webtoken})
}
const verifyUser = async(req,res) => {
    try{
        const authtoken= req.headers.token
        let user= jwt.verify(authtoken,process.env.SECRET_KEY)
        res.json(user)
        }catch(error)
        {
          res.json(error)
        }
}

module.exports.addUser = addUser;
module.exports.getUser = getUser;
module.exports.verifyUser = verifyUser;