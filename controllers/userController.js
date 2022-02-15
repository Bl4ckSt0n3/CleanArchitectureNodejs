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

const Response = require('../core/dtos/responses/read/responseDto');

// handlers
const CreateUser = require('../core/usecases/createUserUsecase');
const GetUser = require('../core/usecases/getUserUsecase');
const UpdateUser = require('../core/usecases/updateUserUsecase');
const DeleteUser = require('../core/usecases/deleteUserUsecase');
const Login = require('../core/usecases/loginUserUsecase');

module.exports = class UserController {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }


    async createUser(req) {
        var response = await CreateUser(req, this.userRepository);
        if (response == null) return new Response("bad request", null, 400);
        return new Response("created", response, 200);
    } 

    async getUser() {
        var response = await GetUser(this.userRepository);
        if (response == null) return new Response("bad request", null, 400);
        return new Response("read", response, 200);
    }

    async updateUser(req) {
        var response = await UpdateUser(req, this.userRepository);
        if (response == null) return new Response("Bad Request", null, 400);
        return new Response("updated", response, 200);
    }

    async deleteUser(req) {
        var response = await DeleteUser(req, this.userRepository);
        if (response == null) return new Response("bad request", null, 400);
        return new Response("deleted", response, 200);
    }

    async login(req) {
        var response = await Login(req, this.userRepository);
        if(response == null) return new Response("bad request", null, 400);
        return new Response("deleted")
    }
    
}