const express = require('express');
const cards = require('./Routes/cardsRouter');
 require('express-async-errors');
const login = require('./Routes/LoginRouter');
const register = require('./Routes/registerRouter');
const error = require('../utils/errorHandle');
const sale = require('./Routes/saleRouter');

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/register', register);
app.use('/customer', cards);
app.use('/sale', sale);

app.use((err, req, res, _next) => { 
    if (err.message === 'Not Found') {
    return res.status(err.status).json(error[404]);
    }
    if (err.message === 'Conflict') {
    return res.status(err.status).json(error[409]);
    }
    if (err.message === 'Expired or invalid token') {
    return res.status(err.status).json(error[401]);
    }
});

module.exports = app;
