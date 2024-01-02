const {commentModel} = require("../models/comments.model");



const commentController = {
    getComment : async(req,res)=>{
        try {
            const Comment = await commentModel.find().populate();
            return res.status(200).send(Comment)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    singleComment:async(req, res)=>{
        try {
            const Comment = await commentModel.findById(req.params.id).populate();
            return res.status(200).send(Comment);
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    createComment : async(req, res)=>{
        try {
            const Comment = await commentModel.create(req.body);
            return res.status(200).send({Comment,message:"created successfully"});
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    deleteComment : async(req, res)=>{
        try {
            const Comment = await commentModel.findByIdAndDelete(req.params.id);
            return res.status(200).send({Comment, message:"deleted successfully"});
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    updateComment : async(req, res)=>{
        try {
            const Comment = await commentModel.findByIdAndUpdate(req.params.id, req.body,{new:true});
            return res.status(200).send(Comment);
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}


module.exports = {commentController}