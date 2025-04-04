const express = require('express')
const app = express();

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/check', (req, res) => {
    const data = req.body;
    console.log(data)
    res.send('working');
})

app.listen(3000);