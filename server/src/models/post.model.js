const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String,required:true},
    url:{type:String,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"user"}
},{
    versionKey:false,
    timestamps:true
});

const postModel =  mongoose.model("post", postSchema);


module.exports = {postModel}