'use strict';

const express = require('express');
var cors = require('cors')
const nanoid = require('nanoid')
require('dotenv').config()

const PORT = process.env.EXPRESS_PORT;
const HOST = process.env.EXPRESS_HOST;


const app = express();
app.use(cors())

// HTTP POST requests
app.post("/", (req, res) => {
    console.log("I got this ", req.body)
})
// HTTP GET requests
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});