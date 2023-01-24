const express = require('express');
require('express-async-errors');
const cors = require('cors');
const cards = require('./Routes/cardsRouter');
const login = require('./Routes/LoginRouter');
const register = require('./Routes/registerRouter');
const error = require('../utils/errorHandle');

const app = express();
app.use(cors());

app.use(express.json());

app.use('/login', login);
app.use('/register', register);
app.use('/customer', cards);

app.use((err, req, res, _next) => { 
    if (err.message === 'Not Found') {
    return res.status(err.status).json(error[404]);
    }

    if (err.message === 'Conflict') {
        return res.status(err.status).json(error[409]);
    }
});

module.exports = app;
