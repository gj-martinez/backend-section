const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

module.exports = function(req, res, next){
    const token = req.headers["authorization"];


    if (!token) {
        const err = new Error();
        err.status = 400;
        err.message = "No existe token";
        throw err;
    }


    jwt.verify(token, JWT_SECRET, function(error, decodeToken){
        if (error) {
            const err = new Error();
            err.message = "Token invalido";
            err.status= 401;
            throw err
        }

        req.user = decodeToken.user;
        next();
    })

}