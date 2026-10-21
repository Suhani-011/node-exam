const User = require('../../modules/user');

const getUserController = async(req,res) => {
    try{

        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(400).json({
            status:false,
            message:"User not found",
            data:null
            })
        }

        return res.status(201).json({
            status:true,
            message:"Profile fetched successfully",
            data:user
        })

    }catch(err){
        console.log("Error:",err);
        return res.status(500).json({
            status:false,
            message:"technical Error",
            data:null
        })
    }
}
const updateUserController = async(req,res) => {
    try{

        const{name,email} = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            {
                name,
                email
            },{
                new:true
            }
        ).select("-password");


        if(!updatedUser){
            return res.status(404).json({
            status:false,
            message:"User not found",
            data:null
            })
        }

        return res.status(201).json({
            status:true,
            message:"Profile Updated successfully",
            data:user
        })

    }catch(err){
        console.log("Error:",err);
        return res.status(500).json({
            status:false,
            message:"technical Error",
            data:null
        })
    }
}
const deleteUserController = async(req,res) => {
    try{

        const deletedUser = await User.findByIdAndDelete(req.user._id);
        if(!deletedUser){
            return res.status(404).json({
            status:false,
            message:"User not found",
            data:null
            })
        }

        return res.status(201).json({
            status:true,
            message:"Profile Deleted successfully",
            data:user
        })

    }catch(err){
        console.log("Error:",err);
        return res.status(500).json({
            status:false,
            message:"technical Error",
            data:null
        })
    }
}


module.exports = {getUserController,updateUserController,deleteUserController}