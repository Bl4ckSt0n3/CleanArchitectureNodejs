'use strict';

const updateUserDto = require('../dtos/requests/update/updateUserDto');

module.exports = (request, userRepository) => {
    return userRepository.update(
        new updateUserDto (
            request.id,
            request.firstName,
            request.lastName,
            request.email,
            request.password
        )
    );
    
};