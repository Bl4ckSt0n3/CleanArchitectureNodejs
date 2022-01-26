'use strict';
module.exports = function(app) {
    var userController = require('../controllers/userController');
    app.route('/user/login').post(userController.login);
}