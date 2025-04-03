const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();


// If we want to allow all pages use 
app.use(cors());


// We can read cookie with the help of this middleware -> cookie-parser.
app.use(cookieParser());


// In this route we are setting a single cookie 
app.get('/', (req, res) => {
    res.cookie('name', 'aryan');
    res.send('cookie is set');
})

// Here we are reading the values of cookies not cookie.
app.get('/check', (req, res) => {
    console.log(req.cookies.name);
    res.send('go to the terminal')
})

// For specific route we combines cors with routing method
app.get('/allow-cors', cors(), (req, res) => {
    res.send('cors has allowed to access this route any other domain')
})

app.listen(3000);