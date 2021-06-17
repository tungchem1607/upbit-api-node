const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
process.env.NODE_ENV = 'production';

const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Setup server port
process.env.NODE_ENV = 'production';

// Initialize Server Binane
require('./demo');

// DATABASE
const models = require("./src/models");

