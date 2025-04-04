const express = require('express')
const app = express();


// checking all the routes for different http methods on postman tool
app.get('/get', (req, res) => {
    res.send('working...')
})

app.post('/post', (req, res) => {
    res.send('working...')
})

app.put('/put', (req, res) => {
    res.send('working...')
})

app.patch('/patch', (req, res) => {
    res.send('working...')
})

app.delete('/delete', (req, res) => {
    res.send('working...')
})

app.listen(3000);