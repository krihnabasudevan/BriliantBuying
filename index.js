const express = require("express")
const cors = require("cors")
const path = require("path")

require("dotenv").config()

require("./dbConnect")

const router = require("./Routes/index")


const app = express()
app.use(cors())
app.use(express.json())
app.use("/public", express.static("public"))
app.use(express.static(path.join(__dirname, 'build')));
app.use("/api",router)


app.listen(8000,console.log("Server is Running at http://locahost:8000"))