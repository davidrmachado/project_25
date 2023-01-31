const loginService = require('../services/loginService');

const loginController = async (req, res) => {
    const corpo = req.body;
    const result = await loginService.login(corpo);
    return res.status(200).json(result);
};

module.exports = { loginController };