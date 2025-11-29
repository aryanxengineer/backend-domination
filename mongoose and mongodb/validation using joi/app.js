const express = require('express');
const app = express();
const { User, validateUser } = require('./models/user.js');

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.post('/create', (req, res) => {
    const user = req.body;
    const error = validateUser(user);
    if (error) {
        return res.status(400).send(error.details.map(detail => detail.message));
    }

    const newUser = new User(user);
    newUser.save()
        .then(() => res.status(201).send('User created successfully!'))
        .catch(err => res.status(500).send('Error creating user: ' + err.message));
});

app.get('/', (req, res) => {
    res.send('Welcome to the Express App!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});