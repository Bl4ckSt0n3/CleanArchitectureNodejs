'use strict';

const express = require('express');
const AuthController = require('../../controllers/authController');
const sequelize = require('../../infrastructure/sequelize/sequelize');
const removeHeader = require('../middleware/removeHeader');

const authRouter = ({ userRepository }) => {
    const router = express.Router();
     
    const authController = new AuthController(userRepository);
 
    router.route('/login')
        .post(async function (req, res) {
            var result = await authController.login(req.body);
            res.status(result.statusCode).send(result)
        });
    return router;
};
 
 
module.exports = authRouter;