const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    let decodedToken;
    try {
        if (!authHeader) {
            throw new Error('Not authenticated.');
        }
        const token = authHeader.split(' ')[1];
        decodedToken = jwt.verify(token, 'putoelqueleesecret');
        if (!decodedToken) {
            throw new Error('Not authenticated.');
        }
    } catch (e) {
        e.statusCode = 401;
        throw e;
    }
    req.userId = decodedToken.userId;
    next();

};
