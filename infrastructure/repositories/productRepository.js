'use strict';

const ProductRepository = require('../../core/contracts/productRepository'); 
const GetProductDto = require('../../core/dtos/responses/read/getProductDto');

module.exports = class extends ProductRepository {
    constructor() {
        super();
    }
    async get(prod_title) {
        const product = {
            cardTitle: "Card Title 0",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: "89.90",
            category: "category"
        }
        if(prod_title == product.cardTitle){
            var res = await new GetProductDto(
                product.cardTitle,
                product.cardText,
                product.price,
                product.category
            )
            return res;
        }
        else {
            return 
        }
    }
}