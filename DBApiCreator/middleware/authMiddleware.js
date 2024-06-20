const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send('Token n�o fornecido');
    }

    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
        if (err) {
            return res.status(401).send('Token inv�lido');
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = authMiddleware;
