// Require Express dependency
const express = require('express')
// Store Express into app alias
const app = express()
// Server Port
const PORT = 8000
// Handle CORS errors
const cors = require('cors')

app.use(cors())

// Placeholder JSON
const rappers = {
    '21 savage': {
        age: 29,
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England',
    },
    'chance the rapper': {
        age: 29,
        birthName: 'Chancelor Bennett',
        birthLocation: 'Chicago, Illinois'
    },
    'dylan': {
        age: 29,
        birthName: 'Dylan',
        birthLocation: 'Dylan'
    }
}

// GET HTML request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// GET JS request
app.get

// GET JSON Request
app.get('/api/:rapperName', (req, res) => {
    const rappersName = req.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
        res.json(rappers[rappersName])
    }
    else {
        res.json(rappers['dylan'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on Port ${PORT}! You'd better go catch it!`)
})