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

    // const resposta = await axios.post("https://api.zenvia.com/v2/channels/whatsapp/messages", mensagemResposta, {
    //     headers: {
    //         "X-API-TOKEN": process.env.ZEN_APIKEY
    //     }
    // }) 

    // console.log(`Retorno ${resposta.data}`)
    console.log(req.body.message)
    res.status(200).end()
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})