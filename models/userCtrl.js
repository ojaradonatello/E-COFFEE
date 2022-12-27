const User = require("../models/userModel");


const createUser = async(req, res) => {
 
    const email =req.body.email;
    const findUser=await User.findOne(email);
    if(!findUser){
        // create new user
        const newUser = User.create(req.body);
        res.Json(newUser)
    }else{
        res.Json({
            msg: "User Already Exists"
        
        });
    }
};

module.exports = {createUser}