const jwt = require('jsonwebtoken');
const constant = require('../../config/constant');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(req.headers);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
 
        jwt.verify(token, constant.JWT.SECRET_KEY, (err, user) => {
            if (err) {
                // console.log(token);
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
 
    } else {
        res.sendStatus(401);
    }
};