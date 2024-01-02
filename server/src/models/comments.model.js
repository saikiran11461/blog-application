const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    title:{type:String,require:false},
})


const commentModel =  mongoose.model("comment", commentsSchema);

module.exports = {commentModel};