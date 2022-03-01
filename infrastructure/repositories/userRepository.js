'use strict';

const bcrypt = require('bcrypt');
const UserRepository = require('../../core/contracts/userRepository');
const CreateUserResponse = require('../../core/dtos/responses/read/getUserDto');
const DeleteUserResponse = require('../../core/dtos/requests/delete/deleteUserDto');
const UpdateUserResponse = require('../../core/dtos/responses/read/getUserDto');
const LoginUserResponse = require('../../core/dtos/requests/LoginUserDto');
const sequelize = require('../sequelize/sequelize');

module.exports = class extends UserRepository {

    constructor() {
        super();
        this.db = sequelize.sequelize;
        this.model = this.db.model('users');
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

    async create(request) { // returns the user info without password that's why I've used getUserDto 
        // var res = await new CreateUserResponse(request.id, request.firstName, request.lastName, request.email);
        return await this.model.create(request);
    }

    async update(request) {
        var res = await new UpdateUserResponse(request.id, request.firstName, request.lastName, request.email);
        return res;
    }

    async delete(request) {
        var res = await new DeleteUserResponse(request.email, request.password, request.username);
        return res;
    }

    async login(request) {
        // var res = new LoginUserResponse(request.email, request.password);
        // console.log(res);
        let user = await this.model.findOne({
            where: {
                email: request.email,
                // password: bcrypt.compare(request.password)
            }
        });
        const validPassword = await bcrypt.compare(request.password, user.password);
        if (validPassword) {
            console.log(validPassword);
            return new LoginUserResponse(request.email, request.password);
        }
        else {
            return null;
        }
        
    }
};