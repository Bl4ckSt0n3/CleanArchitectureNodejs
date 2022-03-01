'use strict';

module.exports = (() => {

    const conf = {
        database : {
            username: "postgres",
            password: "enes",
            database: "ecommerce",
            host: "127.0.0.1",
            dialect: "postgres"
        }
    };
    if (process.env.NODE_ENV === 'dev') {

    }
    return conf;
})();