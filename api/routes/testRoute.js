'use strict';
 module.exports = function(app) {
     var tests = require('../../controllers/testController');

     app.route('/test').get(tests.test_all);
     app.route('/test/create_test').post(tests.create_test);
 }