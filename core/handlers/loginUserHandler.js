'use strict';

const LoginRequest = require('../dtos/requests/LoginUserDto');

module.exports = (login, loginResponse) => {
    return loginResponse.login(
        new LoginRequest(
            login.email,
            login.password
        )
    );
};