const { commentController } = require("../controllers/comments.controller");

const {Router} = require("express");

const commentRouter = Router();

commentRouter.get("/", commentController.getComment);
commentRouter.post("/addcomment", commentController.createComment);
commentRouter.get("/:id", commentController.singleComment);
commentRouter.delete("/:id", commentController.deleteComment);
commentRouter.patch("/:id", commentController.updateComment);

module.exports = {commentRouter}