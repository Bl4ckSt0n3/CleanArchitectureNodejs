'use strict';


const UserRepository = require('../../core/contracts/userRepository');
const Response = require('../../core/dtos/responses/read/getUserDto');
module.exports = class extends UserRepository {

    constructor() {
        super();
    }


    async create(request) {
        var res = await new Response(request.id, request.firstName, request.lastName, request.email, )
        return res;
    }
};