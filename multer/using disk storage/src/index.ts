import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectionDB from './config/db.js';
import upload from './config/multer.js';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
// connectionDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload-image', upload.single('file'), (req, res) => {
  res.send('uploaded successfully');
});

app.listen(3000);