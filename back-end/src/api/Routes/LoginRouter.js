const {Router} = require('express');
const {loginController} = require('../controller/loginController');

const login = Router();

login.post('/', loginController);

module.exports = login;