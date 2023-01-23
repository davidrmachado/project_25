const { createHash } = require('node:crypto');

module.exports = (password) => createHash('md5').update(password).digest('hex');