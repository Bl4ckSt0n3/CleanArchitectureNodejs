var express = require("express");
var app = express();
const helmet = require("helmet");

module.exports = (req, res, next) => {
    app.use(helmet());
    next();
 };