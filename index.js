const dotenv = require('dotenv').config()
const express = require("express")
const server = express()
const cors = require("cors")
const port = process.env.PORT || 9000
const path = require("path")

server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname, "client/build")))


server.use("/api/", (_,res)=>{
    res.json({
        data: "THE API SERVES THEEE DATA"
    })
})

server.listen(port, () => {
console.log(`port available on ${port}`)
})



console.log("It is alive!")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USER)
console.log(process.env.PORT)