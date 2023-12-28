const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}, better go catch it!`))