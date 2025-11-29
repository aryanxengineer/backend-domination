const express = require('express');
const app = express();

app.set('view engine', 'ejs');
const indexRouter = require('./routes/index-router.js');

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});