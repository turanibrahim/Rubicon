// dependency'ler ekleniyor
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('mongoose');
const dotenv = require('dotenv');

//App Settings
const app = express(); // creating Express app
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors()); // client working on 8080,  server working on 8081
dotenv.config({ path: '../.env' });

//DB Settings
const CONNECTION_URL = process.env.DB;
db.connect(CONNECTION_URL, {useNewUrlParser: true ,useUnifiedTopology: true}, (err) => {
    if(err)
        console.log(err);
    else
        console.log('MongoDB connected successfully.');
});

app.get('/todo', (req, res) => {
    res.send([
     'Yapılacak 1',
     'Yapılacak 2'
    ])
})
app.get('/', (req, res) => {
    res.send('hello');
})

app.listen( process.env.PORT || 8081)