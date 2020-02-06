// dependency'ler ekleniyor
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express() // express app yaratılıyor// dependency'ler kullanılıyor

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())// client 8080 server 8081'de çalışacak

app.get('/todo', (req, res) => {
    res.send([
     'Yapılacak 1',
     'Yapılacak 2'
    ])
})
app.get('/todo2', (req, res) => {
    res.send([
     'Yapılacak 1',
     'Yapılacak 2'
    ])
})

app.listen( process.env.PORT || 8081)