'use strict';

const express = require('express');
const ProductController = require('../../controllers/productController');
const auth = require('../middleware/checkout');
const removeHeader = require('../middleware/removeHeader');

const productsRouter = ({productRepository}) => {
    const router = express.Router();
    const productController = new ProductController(productRepository);

    router.route('/:cardTitle')
        .get(removeHeader, async function(req, res) {
            var result = await productController.getProduct(req.params.cardTitle);
            res.status(result.statusCode).send(result)
        });

    return router;
}
module.exports = productsRouter;