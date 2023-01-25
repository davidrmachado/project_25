const { User } = require('../../database/models');
const { generateToken } = require('../../utils/jwt');
const hash = require('../../utils/hash');

const login = async (obj) => {
    const throwError = { status: 404, message: 'Not Found' };
    const senha = hash(obj.password);
    const { dataValues } = await User.findOne({ where: { email: obj.email, password: senha } });
    if (!dataValues) throw throwError;
    const { password, ...newObj } = dataValues;
    return { ...newObj, token: generateToken(newObj) };
};

module.exports = { login };
