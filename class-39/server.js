const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

// ========================
// Link to Database
// ========================
// Updates environment variables
// @see https://zellwk.com/blog/environment-variables/
require('dotenv').config({
    path: 'secrets/variables.env'
})
const connectionString = process.env.DB_URL
// MongoDB connection string removed in favor of environment variables. Will not bother purging old commits because this database is a test database anyway and will promptly be deleted.

// Server request handlers go within MongoDB connection promise
MongoClient.connect(connectionString)
    // If connection promise fulfilled, continue
    .then(client => {
        console.log('Connected to Database')
        // Create a new MongoDB Database
        const db = client.db('test-db')
        // Create a new MongoDB Collection within the Database
        const quotesCollection = db.collection('quotes')

        // ========================
        // Middlewares
        // Tell express that we will be using EJS as the template engine
        app.set('view engine', 'ejs')
        // ========================
        // Use bodyParser to handle form submissions
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.use(express.static('public'))

        // ========================
        // Routes
        // ========================

        // GET
        app.get('/', (req, res) => {
            db.collection('quotes')
                .find()
                .toArray()
                .then(results => {
                    console.log(results)
                    res.render('index.ejs', { quotes: results })
                })
                .catch(error => console.error(error));
        })

        // POST
        // Upon form submission at <form action="/quotes">
        app.post('/quotes', (req, res) => {
            // Working specifically with our MongoDB Collection called quotesCollection
            quotesCollection
                // Insert request.body into the database's collection
                .insertOne(req.body)
                // If post promise is fulfilled:
                .then(result => {
                    // After form submission, client is waiting for a response from the server. Tell it to redirect to itself.
                    res.redirect('/')
                })
                // If post promise rejected, console error.
                .catch(error => console.error(error))
        })

        // PUT
        app.put('/quotes', (req, res) => {
            quotesCollection
                .findOneAndUpdate(
                    { name: 'Yoda' },
                    {
                        $set: {
                            name: req.body.name,
                            quote: req.body.quote,
                        },
                    },
                    {
                        upsert: true,
                    }
                )
                .then(result => {
                    res.json('Success')
                })
                .catch(error => console.error(error))
        })


        // DELETE

        // ========================
        // Listen
        // ========================
        const PORT = 8000;
        app.listen(PORT, () => console.log(`Your server is running on port ${PORT}, better go catch it!`))
    })
    // If connection promise rejected, console error.
    .catch(error => console.error(error))