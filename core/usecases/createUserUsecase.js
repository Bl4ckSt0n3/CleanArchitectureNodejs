'use strict';

const bcrypt = require('bcrypt');
const CreateUserDto = require('../dtos/requests/create/createUserDto');

module.exports = async (request, userRepository) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(request.password, salt);

    return userRepository.create(
        new CreateUserDto(
            request.id,
            request.firstName,
            request.lastName,
            request.email,
            hashedPassword,
            request.phone,
            request.country,
            request.city,
            request.state,
            request.zip
        )
    );
};