'use strict';

 // strict mode enable
// const _userRepository = require('../infrastructure/repositories/userRepository');

// exports.login = async function(req, res) {
//     var requesBody = req.body;
//     var username = 'user';
//     if (requesBody["username"] == username) {
//         await res.json({"message": "success !"});
//     }else {
//         await res.json({"message": "unsuccess"});
//     }
// }

const LoginHandler = require('../core/handlers/loginUserHandler')
const UserResponse = require('../core/dtos/responses/read/responseDto');
const UserHandler = require('../core/handlers/createUserHandler');

module.exports = class UserController {

    constructor(userRepository) {
        this.userRepository = userRepository; // delete it
    }

    // async login(req) {
    //     var response = await LoginHandler(req);

    // }

    async createUser(req) {
        var response = await UserHandler(req, this.userRepository);
        if (response == null) return new UserResponse("bad request", null, 400);
        return new UserResponse("created", response, 200);
    } 
    
}