const express = require('express')
const expressSession = require('express-session')
const flash = require('connect-flash')
const morgan = require('morgan')
const app = express();

app.use(morgan("dev"));

app.use(expressSession({
    resave: false,
    secret: 'secret key',
    saveUninitialized: false,
}))

// It is used only one time on redirected page 
app.use(flash());

app.get('/', (req, res) => {
    req.flash('name', 'aryan');
    res.send('working...')
})

app.get('/check', (req, res) => {
    const a = req.flash('name')
    res.send(a);
})

// Here we are using morgan middleware -> basic version
app.get('/about', (req, res) => {    
    res.send('go to terminal');
})

app.listen(3000, () => {
    console.log('server is running...')
})