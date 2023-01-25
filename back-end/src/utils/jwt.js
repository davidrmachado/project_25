require('dotenv').config();
/* const fs = require('fs');  */
const { sign, verify } = require('jsonwebtoken');
/* const path = require('path');
 */
/* const keyPath = path.join(__dirname, '../jwt.evaluation.key');

const JWT_KEY = () => {
  try {
    const jwt = fs.readFileSync(keyPath, 'utf8');
    return jwt;
  } catch (err) {
    console.error(err);
  }
}; */

const generateToken = (obj) => {
    const { password, ...newObj } = obj;
    const token = sign({ ...newObj }, 'secret_key', {
        expiresIn: '1d',
        algorithm: 'HS256',
    });

    return token;
};

const verifyToken = (token) => {
    try {
        const data = verify(token, 'secret_key');
        return data;
    } catch (err) {
        const throwError = { status: 401, message: 'Expired or invalid token' };
        throw throwError;
    }
};

module.exports = { verifyToken, generateToken };