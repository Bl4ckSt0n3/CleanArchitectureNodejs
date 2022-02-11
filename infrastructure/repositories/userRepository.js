'use strict';


const UserRepository = require('../../core/contracts/userRepository');
const CreateUserResponse = require('../../core/dtos/responses/read/getUserDto');
const DeleteUserResponse = require('../../core/dtos/requests/delete/deleteUserDto');
const Response = require('../../core/dtos/responses/read/responseDto');

module.exports = class extends UserRepository {

    constructor() {
        super();
    }

    async create(request) { // returns the user info without password that's why I've used getUserDto 
        var res = await new CreateUserResponse(request.id, request.firstName, request.lastName, request.email);
        return res;
    }

    async get() { // this will be change according to database. I've just tried it works or not
        var person = {
            id: null,
            firstName: "john",
            lastName: "Doe",
        }
        var res = await new CreateUserResponse(
            person.id,
            person.firstName,
            person.lastName
        )
        return res;
    }

    async delete(request) {
        var res = await new DeleteUserResponse(request.email, request.password, request.username);
        return res;
    }
};