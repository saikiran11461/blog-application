const express = require('express');
const { Connection } = require('./src/config/db');
const {postRouter} = require("./src/routes/post.routes")

const app = express();

app.use(express.json())
app.use("/posts", postRouter)
app.listen(5000,async()=>{
    try {
        await Connection();
        console.log("db connected success")
    } catch (error) {
        console.log(error)
    }
})