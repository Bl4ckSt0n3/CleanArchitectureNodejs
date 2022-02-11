// 'use strict';
// const responseDto = require('../core/dtos/responses/read/responseDto');
// const authDto = require('../core/dtos/authDto');
// const jwt = require('jsonwebtoken');
// const loginUser = require('../core/usecases/loginUserUsecase');
// const constant = require('../config/constant');

// module.exports = class AuthController {
//     constructor(userRepository) {
//         this.userRepository = userRepository;
//     }
    
//     async login(req) {
//         var response = loginUser(req, this.userRepository);
//         if(response != null) {
//             const token = jwt.sign(
//                 {
//                     id: response.id,
//                     email: response.email
//                 },
//                 constant.JWT.SECRET_KEY,
//                 {
//                     expiresIn: "60s"
//                 }
//             );
//             return new responseDto("ok", new authDto(token), 200);
//         }
//         else {
//             return new responseDto("bad request", null, 400);
//         }
//     } 
// }


