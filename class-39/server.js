const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')

const app = express();

const PORT = 8000;

// ========================
// Link to Database
// ========================
// Updates environment variables
// @see https://zellwk.com/blog/environment-variables/
const dotenv = require('dotenv').config({
    path: 'secrets/variables.env'
})

// Replace process.env.DB_URL with your actual connection string
const connectionString = process.env.DB_URL
// MongoDB connection string removed in favor of environment variables. Will not bother purging old commits because this database is a test database anyway and will promptly be deleted.

// Server request handlers go within MongoDB connection promise
MongoClient.connect(connectionString)
    // If connection promise fulfilled, continue
    .then(client => {

        // ========================
        // Middlewares
        // ========================

        // ========================
        // Routes
        // ========================

        console.log('Connected to Database')

        // Create a new MongoDB Database
        const db = client.db('test-db')

        // Create a new MongoDB Collection within the Database
        const quotesCollection = db.collection('quotes')

        // Use CORS within server
        app.use(cors())

        // Use bodyParser to handle form submissions
        app.use(bodyParser.urlencoded({ extended: true }))

        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
            db.collection('quotes')
                .find()
                .toArray()
                .then(results => {
                    console.log(results)
                })
                .catch(error => console.error(error))
            // ...
        })

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

        // ========================
        // Listen
        // ========================
        app.listen(PORT, () => console.log(`Your server is running on port ${PORT}, better go catch it!`))
    })
    // If connection promise rejected, console error.
    .catch(error => console.error(error))