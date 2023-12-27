const mongoose = require("mongoose");


const Connection =()=>{
    return mongoose.connect("mongodb://localhost:27017/blog-application")
};

module.exports ={Connection}