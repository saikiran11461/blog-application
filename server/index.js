const express = require('express');
const { Connection } = require('./src/config/db');
const {postRouter} = require("./src/routes/post.routes")
const {userRouter} = require("./src/routes/user.routes");
const {commentRouter} = require("./src/routes/comments.routes");
const cors = require("cors")
const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/comment", commentRouter);
app.listen(5000,async()=>{
    try {
        await Connection();
        console.log("db connected success")
    } catch (error) {
        console.log(error)
    }
})