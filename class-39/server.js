// Import CORS Package for bypassing our SOP errors
const cors = require('cors')

// Import Express Package for starting our server
const express = require('express');

// Store express in app
const app = express();

// Import bodyParser, a middleware that will translate the <form> submissions for the server. 
const bodyParser = require('body-parser')

// Default local port 8000
const PORT = 8000;

// Import MongoDB package 
const MongoClient = require('mongodb').MongoClient

// MongoDB connection string from our project. Database user/pw is admin/admin
const connectionString = "mongodb+srv://admin:admin@atlascluster.uxzi8qt.mongodb.net/?retryWrites=true&w=majority"

// Server request handlers go within MongoDB connection promise
MongoClient.connect(connectionString)
    // If connection promise fulfilled, continue
    .then(client => {
        console.log('Connected to Database')

        // Create a new MongoDB Database
        const db = client.db('test-db')

        // Create a new MongoDB Collection within the Database
        const quotesCollection = db.collection('quotes')

        // Use CORS within server
        app.use(cors())

        // Use bodyParser to handle form submissions
        app.use(bodyParser.urlencoded({ extended: true }))

        // Run index.html as default for localhost:8000/
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
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

        // Run server
        app.listen(PORT, () => console.log(`Your server is running on port ${PORT}, better go catch it!`))
    })
    // If connection promise rejected, console error.
    .catch(error => console.error(error))