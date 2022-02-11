'use strict';

const GetUserDto = require('../dtos/responses/read/getUserDto');

module.exports = (userRepository) => {
    return userRepository.get();
}