const crypto = require('crypto');

const encryptPassword = (password) => {
    const salt = crypto.randomBytes(16).toString('hex');

    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    return {
        salt,
        hash
    } 
}

const decryptPassword = (password, hash, salt) => {
    verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return verifyHash === hash;
}

module.exports = { encryptPassword, decryptPassword };