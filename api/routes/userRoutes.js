'use strict';

const express = require('express');
var UserController = require('../../controllers/userController');

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
    router.route('/user/create_user')
        .post(async function (req, res) {
            var result = await userController.createUser(req.body);
            res.status(result.statusCode).send(result)
        });

    // to get user once
    router.route('/user/get_user')
        .get(async function (req, res) {
            var result = await userController.getUser();
            res.status(result.statusCode).send(result);
        });

    router.route('/user/update_user')
        .put(async function (req, res) {
            var result = await userController.updateUser(req.body);
            res.status(result.statusCode).send(result);
        });

    router.route('/user/delete_user')
        .delete(async function (req, res) {
            var result = await userController.deleteUser(req.body);
            res.status(result.statusCode).send(result);
        });

    return router;
}
module.exports = usersRouter;