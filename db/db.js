const mongoose = require("mongoose");

const db = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Databse connected");
    }catch(err){
        console.log("Database not connected",err)
    }
}
module.exports = db;