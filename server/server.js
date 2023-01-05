'use strict';

const express = require('express');
var cors = require('cors')
const nanoid = require('nanoid')
require('dotenv').config()

const PORT = process.env.EXPRESS_PORT;
const HOST = process.env.EXPRESS_HOST;


const app = express();
app.use(cors())

// HTTP POST: store the short code for the long url
// HTTP POST http://host:port/save body -> https://github.com => gdfte545 => store in postgresdb => respond with short code
app.post("/save", (req, res) => {
    console.log("I got this ", req.body);
    res.send(nanoid.nanoid());
})
// HTTP GET: get the long url by the short code
// HTTP GET http://host:port/get?code=gdfte545 => postgres => return to longurl => client will HTTP redirect
app.get('/get', (req, res) => {
  res.send('Hello World');
});

// HTTP GET requests
app.get('/health', (req, res) => {
  res.status(200).send('healthy');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});