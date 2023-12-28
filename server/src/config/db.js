const mongoose = require('mongoose');

const Connection = ()=>{
    return mongoose.connect("mongodb+srv://saikirancoureses:vgpxi5kmUFSSGN2S@cluster0.yxrkzyn.mongodb.net/")
};

module.exports = {Connection}




//vgpxi5kmUFSSGN2S