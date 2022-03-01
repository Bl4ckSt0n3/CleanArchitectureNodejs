'use strict';

const express = require('express');
// const jwt = require('jsonwebtoken');
// const key = require('../../config/constant');
const UserController = require('../../controllers/userController');
const auth = require('../middleware/checkout');


// module.exports = ({ userRepository }) => function(app) {
//     var UserController = require('../../controllers/userController');
//     const userController = new UserController(userRepository)
    
//     app.route('/user/create_user').post(
//         async function(res, req) {
//             var result = await userController.createUser(req.body);
//             res.status(result.statusCode).send(result)
//         }
//     );
// }

const usersRouter = ({ userRepository }) => {
    const router = express.Router();
    const userController = new UserController(userRepository);

    // to create user
    router.route('/create_user')
        .post(async function (req, res) {
            var result = await userController.createUser(req.body);
            res.status(result.statusCode).send(result)
        });
    // to get user once
    router.route('/get_user')
        .get(auth, async function (req, res) {
            // const authHeader = req.headers['authorization'];
            // console.log(req.headers);
            // const token = authHeader.split(' ')[1];
            // console.log(token);
            // if (!token) return res.status(401).send({ message: 'No token provided.' });

            // jwt.verify(token, key.JWT.SECRET_KEY, async function(err) {
            //     if (err) return res.status(500).send({ message: 'Failed to authenticate token.' });
            //     var result = await userController.getUser();
            //     res.status(result.statusCode).send(result);
            // });
            var result = await userController.getUser();
            res.status(result.statusCode).send(result);
        });

    router.route('/update_user')
        .put(async function (req, res) {
            var result = await userController.updateUser(req.body);
            res.status(result.statusCode).send(result);
        });

    router.route('/user/delete_user')
        .delete(async function (req, res) {
            var result = await userController.deleteUser(req.body);
            res.status(result.statusCode).send(result); 
        });

    // router.route('/user/login')
    //     .post(async function (req, res) {
    //         var result = await userController.login(req.body);
    //         res.status(result.statusCode).send(result);
    //     });

    return router;
}
module.exports = usersRouter;

// const Auth = (req, res, next) => {
//     const authHeader = req.headers.authorization;
    
//     if (authHeader !== undefined) {
//         const token = authHeader.split(' ')[1];
 
//         jwt.verify(token, key.JWT.SECRET_KEY, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }
//             req.user = user;
//             next();
//         });
 
//     } else {
//         res.sendStatus(401);
//     }
// };