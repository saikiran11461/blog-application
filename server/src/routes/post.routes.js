const { postController } = require("../controllers/post.controller");

const {Router} = require("express");

const postRouter = Router();

postRouter.get("/", postController.getPost)

module.exports = {postRouter}