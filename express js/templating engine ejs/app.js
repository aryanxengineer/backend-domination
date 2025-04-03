const express = require('express')
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    a = 'Aryan';
    res.render('index', {a});
})

app.listen(3000);