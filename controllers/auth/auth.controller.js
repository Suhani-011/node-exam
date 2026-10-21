const User = require('../../modules/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const registerController = async (req,res) => {
    try{

        const {name,email,password} = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({
            status:false,
            message:"User already exists",
            data:null
        })
        }
        const hashPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,email,password:hashPassword
        })

        return res.status(201).json({
            status:true,
            message:"User registered successfully",
            data:user
        })

    }catch(err){
        console.log("Error : ",err);
        return res.status(500).json({
            status:false,
            message:"Technical Error",
            data:null
        })
    }
}
const loginController = async (req,res) => {
    try{
        const {name,email} = req.body;

        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({
            status:false,
            message:"User not found",
            data:null
            })
        }

        const passMatch = bcrypt.compare(password,userExist.password);

        if(!passMatch){
            return res.status(400).json({
            status:false,
            message:"Password not match",
            data:null
            })
        }

        const token = jwt.sign({id:userExist_.id},process.env.JWT_SECRET);

        return res.status(201).json({
            status:true,
            message:"User Logined Successfully",
            data:{
                id:userExist._id,
                name:userExist.name,
                email:userExist.email
            }
            })

    }catch(err){
        console.log("Error : ",err);
        return res.status(500).json({
            status:false,
            message:"Technical Error",
            data:null
        })
    }
}

module.exports = (registerController,loginController)