'use strict';

// const GetProductDto = require('../dtos/responses/read/getProductDto');

module.exports = (prodTitle, productRepository) => {
    return productRepository.get(prodTitle);
}