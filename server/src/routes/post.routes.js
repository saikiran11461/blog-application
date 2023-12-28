const { postController } = require("../controllers/post.controller");

const {Router} = require("express");

const postRouter = Router();

postRouter.get("/", postController.getPost);
postRouter.post("/addpost", postController.createPost);
postRouter.get("/:id", postController.singlePost);
postRouter.delete("/:id", postController.deletePost);
postRouter.patch("/:id", postController.updatePost);

module.exports = {postRouter}