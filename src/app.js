const express = require('express');
const routes = require('./routes');

require('dotenv').config();

require('./database');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(routes);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

module.exports = app;
