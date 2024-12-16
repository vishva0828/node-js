const express = require("express")
const app = express()
const database = require("./src/config/database")

database.on("open", () => {
    app.listen(3030, () => {
        console.log("server is running");
    })
})

database.on("error", () => {
    console.log("error, while conneting the db");
})