'use strict';

const UserRepository = require('../infrastructure/repositories/userRepository');
const ProductRepository = require('../infrastructure/repositories/productRepository');

function services() {
    const services = {};

    services.userRepository = new UserRepository();
    services.productRepository = new ProductRepository();

    return services;
}

module.exports = services();