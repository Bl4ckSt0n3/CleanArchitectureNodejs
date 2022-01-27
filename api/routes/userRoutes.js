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

const usersRouter = ({ userRepository }) => { //delete repo
    const router = express.Router();
    const userController = new UserController(userRepository);

    router.route('/user/create_user')
        .post(async function (req, res) {
            var result = await userController.createUser(req.body);
            res.status(result.statusCode).send(result)
        });
    return router;
}
module.exports = usersRouter;