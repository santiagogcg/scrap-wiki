const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')
const app = express()

const url = 'https://es.wikipedia.org/wiki/Categor%C3%ADa:M%C3%BAsicos_de_rap'

app.get('/', (req, res) => {

    axios.get(url).then((response) => {
        if (response.status === 200) {
            const html = response.data
            const $ = cheerio.load(html)

            // console.log(html)
            // res.send(html)

            const artists = []

            $('#mw-pages li').each((index, element) => {

                const title = $(element).attr('title')

                console.log(title)
                res.send(title)

            })


        }
    })
})





app.listen(5000, () => {
    console.log('Servidor escuchando puerto 5000')
})
