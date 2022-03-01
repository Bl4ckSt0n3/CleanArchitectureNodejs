'use strict';
const express = require('express');
const checkAuth = require('../middleware/checkout');
const auth = require('./auth');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

const apiRouter = (serviceLocator) => {
    const routes = express.Router();
    
    routes.use('/auth', auth(serviceLocator));
    // routes.use('/login', checkAuth);
    routes.use('/user', userRoutes(serviceLocator));
    routes.use('/products', productRoutes(serviceLocator));
    routes.use('/user', checkAuth);
 
    return routes;
};
 
 
module.exports = apiRouter;