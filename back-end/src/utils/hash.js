const hash = require('node:crypto');

module.exports = (password) => hash.createHash('md5').update(password).digest('hex');