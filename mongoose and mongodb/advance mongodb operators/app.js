const express = require("express");
const mongooseConnection = require("./config/mongoose");
const userModel = require("./models/user");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create", async (req, res) => {
  const user = await userModel.insertMany([
    {
      "username": "john_doe",
      "email": "john@example.com",
      "password": 123456,
      "age": 28,
      "isUser": true
    },
    {
      "username": "jane_smith",
      "email": "jane@example.com",
      "password": 234567,
      "age": 32,
      "isUser": true
    },
    {
      "username": "alex_king",
      "email": "alex@example.com",
      "password": 345678,
      "age": 24,
      "isUser": true
    },
    {
      "username": "linda_ray",
      "email": "linda@example.com",
      "password": 456789,
      "age": 27,
      "isUser": true
    },
    {
      "username": "mike_ross",
      "email": "mike@example.com",
      "password": 567890,
      "age": 30,
      "isUser": true
    },
    {
      "username": "rachel_green",
      "email": "rachel@example.com",
      "password": 678901,
      "age": 26,
      "isUser": true
    },
    {
      "username": "tom_hardy",
      "email": "tom@example.com",
      "password": 789012,
      "age": 33,
      "isUser": true
    },
    {
      "username": "emma_watson",
      "email": "emma@example.com",
      "password": 890123,
      "age": 29,
      "isUser": true
    },
    {
      "username": "harry_potter",
      "email": "harry@example.com",
      "password": 901234,
      "age": 22,
      "isUser": true
    },
    {
      "username": "ron_weasley",
      "email": "ron@example.com",
      "password": 112233,
      "age": 25,
      "isUser": true
    },
    {
      "username": "hermione_granger",
      "email": "hermione@example.com",
      "password": 223344,
      "age": 24,
      "isUser": true
    },
    {
      "username": "tony_stark",
      "email": "tony@example.com",
      "password": 334455,
      "age": 42,
      "isUser": true
    },
    {
      "username": "steve_rogers",
      "email": "steve@example.com",
      "password": 445566,
      "age": 39,
      "isUser": true
    },
    {
      "username": "natasha_romanoff",
      "email": "natasha@example.com",
      "password": 556677,
      "age": 35,
      "isUser": true
    },
    {
      "username": "bruce_banner",
      "email": "bruce@example.com",
      "password": 667788,
      "age": 40,
      "isUser": true
    },
    {
      "username": "thor_odinson",
      "email": "thor@example.com",
      "password": 778899,
      "age": 1500,
      "isUser": true
    },
    {
      "username": "loki_laufeyson",
      "email": "loki@example.com",
      "password": 889900,
      "age": 1050,
      "isUser": true
    },
    {
      "username": "peter_parker",
      "email": "peter@example.com",
      "password": 990011,
      "age": 21,
      "isUser": true
    },
    {
      "username": "wanda_maximoff",
      "email": "wanda@example.com",
      "password": 101112,
      "age": 28,
      "isUser": true
    },
    {
      "username": "vision_android",
      "email": "vision@example.com",
      "password": 121314,
      "age": 5,
      "isUser": true
    }
  ]
  );
  res.send(user);
});

app.get('/equalto', async (req, res) => {
  const user = await userModel.find({age : {$eq : 27}});
  res.send(user);
})

app.get('/notequalto', async (req, res) => {
  const user = await userModel.find({age : {$ne : 27}});
  res.send(user);
})

app.get('/gt', async (req, res) => {
  const user = await userModel.find({age : {$gt : 27}});
  res.send(user);
})

app.get('/gte', async (req, res) => {
  const user = await userModel.find({age : {$gte : 30}});
  res.send(user);
})

app.get('/lt', async (req, res) => {
  const user = await userModel.find({age : {$lt : 30}});
  res.send(user);
})

app.get('/lte', async (req, res) => {
  const user = await userModel.find({age : {$lte : 30}});
  res.send(user);
})

app.get('/in', async (req, res) => {
  const user = await userModel.find({age : {$in : [27, 26, 19, 30]}});
  res.send(user);
})

app.get('/in', async (req, res) => {
  const user = await userModel.find({age : {$in : [27, 26, 19, 30]}});
  res.send(user);
})

app.listen(3000);
