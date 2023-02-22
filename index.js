require("dotenv").config()
const express = require("express")
const server = express()
const axios = require("axios")

server.use(express.json())
server.post('/hook', async (req, res) => {
    // pega as informações necessárias
    const {message} = req.body
    const {from} = message

    const mensagemResposta = {
        from: "stream-sweatshirt",
        to: from,
        contents: [
            {
                type: "text",
                text: "mensagem recebida!"
            }
        ]
    }

    const retorno = await axios.post('https://api.zenvia.com/v2/channels/whatsapp/messages', {
        "X-API-TOKEN":process.env.ZEN_APIKEY
    }, mensagemResposta)

    console.log(`Retorno ${retorno.data}`)

    console.log(req.body)
    res.send(req.body)
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})