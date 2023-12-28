const mongoose = require('mongoose');

const Connection = ()=>{
    return mongoose.connect("mongodb://localhost:27017/local")
};

module.exports = {Connection}