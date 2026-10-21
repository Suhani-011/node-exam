const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const db = require("./db/db");
const bodyparser = require("body-parser");
const routes = require("./routes/index")

const app = express();
port = process.env.PORT || 6000;

db();

app.use(express.json());
app.use(bodyparser,bodyparser.urlencoded({extended:true}));
app.use("/api",routes);


app.use("/",(req,res) => {
    res.send("Profile API is running");
})

app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`)
})