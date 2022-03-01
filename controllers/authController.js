'use strict';
const responseDto = require('../core/dtos/responses/read/responseDto');
const authDto = require('../core/dtos/authDto');
const jwt = require('jsonwebtoken');
const loginUser = require('../core/usecases/loginUserUsecase');
const constant = require('../config/constant');

module.exports = class AuthController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    
    async login(req) {
        // console.log(req.body);
        var response = await loginUser(req, this.userRepository);
        if(response != null) {
            // response.then((a) => {
            //     console.log(a.email);  
            // }); # access promise object

            const token = jwt.sign(
                {
                    // id: response.id,
                    email: response.email
                },
                constant.JWT.SECRET_KEY,
                {
                    // expiresIn: "60000"
                    expiresIn: "24h"
                }
            );
            // console.log(response);
            return new responseDto("ok", new authDto(token, response.email), 200);

            
            // console.log(response);
            // const res = async () =>  {
            //     const t = await response;
            //     console.log(t);
            // }
            // res();
            
            
        }
        else {
            return new responseDto("bad request", null, 400);
        }
    } 
}


