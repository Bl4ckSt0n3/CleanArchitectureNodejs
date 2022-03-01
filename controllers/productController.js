'use strict';

const Response = require('../core/dtos/responses/read/responseDto');
const GetProduct = require('../core/usecases/getProductUsecase');

module.exports = class ProductController {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getProduct(prodTitle) {
        var response = await GetProduct(prodTitle, this.productRepository);
        if (response == null) return new Response("bad request", null, 400);
        return new Response("prod", response, 200); 
    }
}