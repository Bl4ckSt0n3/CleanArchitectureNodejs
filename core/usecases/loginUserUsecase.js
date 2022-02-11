'use strict';

const LoginRequest = require('../dtos/requests/LoginUserDto');

module.exports = (request, userRepository) => {
    return userRepository.login(
        new LoginRequest(
            request.email,
            request.password
        )
    );
};