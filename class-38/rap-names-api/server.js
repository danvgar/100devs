// Require Express dependency
const express = require('express')
// Store Express into app alias
const app = express()
// Server Port
const PORT = 8000

// Placeholder JSON
const savage = {
    age: 29,
    birthName: 'Sheyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
}

// GET HTML request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// GET JSON Request
app.get('/api', (req, res) => {
    res.json(savage)
})

app.listen(PORT, () => {
    console.log(`The server is running on Port ${PORT}! You'd better go catch it!`)
})