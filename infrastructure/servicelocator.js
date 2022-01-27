'use strict';

const UserRepository = require('../infrastructure/repositories/userRepository');

function services() {
    const services = {};

    services.userRepository = new UserRepository();

    return services;
}

module.exports = services();