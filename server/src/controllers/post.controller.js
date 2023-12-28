const {postModel} = require("../models/post.model");



const postController = {
    getPost : async(req,res)=>{
        try {
            const Post = await postModel.find();
            return res.status(200).send(Post)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}


module.exports = {postController}