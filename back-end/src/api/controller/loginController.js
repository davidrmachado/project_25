const {login} = require('../services/loginService');

const loginController = async (req, res) => {
    const corpo = req.body;
const result = await login(corpo);
return res.status(200).json(result);
}

module.exports = {loginController};