const {postModel} = require("../models/post.model");



const postController = {
    getPost : async(req,res)=>{
        try {
            const Post = await postModel.find().populate({path:"user_id", select:["name", "email"]});
            return res.status(200).send(Post)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    singlePost:async(req, res)=>{
        try {
            const Post = await postModel.findById(req.params.id);
            return res.status(200).send(Post);
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    createPost : async(req, res)=>{
        try {
            const Post = await postModel.create(req.body);
            return res.status(200).send({Post,message:"created successfully"});
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    deletePost : async(req, res)=>{
        try {
            const post = await postModel.findByIdAndDelete(req.params.id);
            return res.status(200).send(post);
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    updatePost : async(req, res)=>{
        try {
            const post = await postModel.findByIdAndUpdate(req.params.id, req.body,{new:true});
            return res.status(200).send(post);
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}


module.exports = {postController}