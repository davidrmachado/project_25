const models = require('../index');
const jwt = require('../../utils/jwt');
const hash = require('../../utils/hash');

const login = async (obj) => {
    const throwError = { status: 404, message: 'Not Found' };
    const senha = hash(obj.password);
    const response = await models.User.findOne({ where: { email: obj.email, password: senha } });
    if (!response) throw throwError;
    const { password, ...newObj } = response.dataValues;
    return { ...newObj, token: jwt.generateToken(newObj) };
};

module.exports = { login };
