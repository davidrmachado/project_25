require('dotenv').config();
const {sign, verify} = require('jsonwebtoken');

const generateToken = (obj) => {
    const {password, ...newObj} = obj;
    const token = sign({...newObj}, process.env.JWT_SECRET, {
        expiresIn: '1d',
        algorithm: 'HS256',
    });

    return token;
}

const verifyToken = (token) => {
    try {
        const data = verify(token, process.env.JWT_SECRET);
        return data;
    } catch (err) {
        const throwError = { status: 401, message: 'Expired or invalid token' };
        throw throwError;
    }
}

module.exports = {verifyToken, generateToken};