const express = require('express')
const app = express();

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    try {
        res.render('index')
    } catch (error) {
        res.send(error)
    }
})

app.listen(3000)