'use strict';

// const path = require('path');
const { Sequelize } = require('sequelize');
const config = require('../../config/dbConfig');

const sequelize = new Sequelize(
    config.database.database,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    });

// import models here
// sequelize.import('./models/users');
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.model = require('./models/users')(sequelize, Sequelize);
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//  });
module.exports = db;
