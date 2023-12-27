const express = require("express");
const { Connection } = require("./src/config/db");

const app = express();


app.listen(3100,async()=>{
    try {
        await Connection()
        console.log("db connected success")
    } catch (error) {
        console.log(error.message)
    }
})