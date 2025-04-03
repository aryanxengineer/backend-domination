const express = require("express");
const expressSession = require("express-session");
const cors = require("cors");
const flash = require("connect-flash");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const app = express();

// express session: After setting the session values we can access these values anywhere on every route.
app.use(
  expressSession({
    resave: false,
    secret: "my secret",
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
    res.send('hello')
})


// Route to set session values using spread operator
app.get("/set-session", (req, res) => {
    Object.assign(req.session, {
        username: "Aryan",
        role: "admin",
        isLoggedIn: true
      });
    
    res.send("Session data has been set!");
  });
  
  // Route to get session data
  app.get("/get-session", (req, res) => {
    res.json(req.session);
  });
  
  // Route to destroy session
  app.get("/destroy-session", (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.send("Error destroying session.");
      }
      res.send("Session destroyed successfully.");
    });
  });
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
