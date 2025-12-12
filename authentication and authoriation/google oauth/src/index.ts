import express from 'express';
import connectDB from './config/db.js';
import authRouter from './routes/auth.routes.js';
import expressSession from 'express-session';
import passport from 'passport';
import './config/passport.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);


app.get('/', (req, res) => {
    res.send('Welcome to the Google OAuth Example!');
});

app.get('/login', (req, res) => {
    res.send('<a href="/auth/google">Log in with Google</a>');
});

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on http://localhost:3000');
}); 