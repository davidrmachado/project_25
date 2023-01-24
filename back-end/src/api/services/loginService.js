const { User } = require('../../database/models');
const { generateToken } = require('../../utils/jwt');
const hash = require('../../utils/hash');

const login = async (obj) => {
    const throwError = { status: 404, message: 'Not Found' };
    const senha = hash(obj.password);
    const response = await User.findOne({ where: { email: obj.email, password: senha } });
    if (!response) throw throwError;
    const { password, ...newObj } = response.dataValues;
    const token = generateToken(response);
    return { ...newObj, token };
};

module.exports = { login };
