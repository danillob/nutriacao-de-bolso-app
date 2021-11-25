const express = require('express');
const routes = require('./routes');

require('dotenv').config();

require('./database');

const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
