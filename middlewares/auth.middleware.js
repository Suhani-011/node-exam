const User = require('../../modules/user');
const jwt = require('jsonwebtoken')

const authenticate = async(req,res,next) => {
    try{

        if(!req.headers.authorization){

            return res.status(401).json({
                status:false,
                message:"Authorization Token required",
                data:null
            })
        }
        if(req.headers.authorization.startsWith("Bearer ")){

            return res.status(401).json({
                status:false,
                message:"Invalid Authorization Format ",
                data:null
            })
        }

        const token = req.headers.authorization.split(" ")[1];

        const tokenPayload = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        const user = await User.findById(tokenPayload.id);

        if(!user){
            return res.status(401).json({
            status:false,
            message:"User Not Found",
            data:null
            })
        }
        req.user = user;
        req.userId = user._id;

        next();

    }catch(err){

        console.log("Error : ",err);

        return res.status(401).json({
            status:false,
            message:"Invalid or Expired Token",
            data:null
        })
    }
}

module.exports = {authenticate}