require("dotenv").config()
const express = require("express")
const server = express()

server.use(express.json())
server.post('/hook', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})