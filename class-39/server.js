const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 8000;
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}, better go catch it!`))