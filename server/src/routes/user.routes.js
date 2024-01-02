const {userController} = require("../controllers/userController");

const {Router} = require("express");

const userRouter = Router();

userRouter.get("/", userController.getUser);
userRouter.post("/adduser", userController.createUser);
userRouter.get(":/id", userController.singleUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.patch("/:id", userController.patchUser)
userRouter.post("/register",userController.register);
userRouter.post("/login", userController.login)
module.exports = {userRouter}