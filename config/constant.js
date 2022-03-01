'use strict';

const generateApiKey = require('generate-api-key');
module.exports = {

  JWT: {
    SECRET_KEY: apikey() // put a unique api key generated with uuid or hash 
  }
 // https://www.npmjs.com/package/generate-api-key
 // https://www.npmjs.com/package/uuid-apikey
 // https://www.codegrepper.com/code-examples/javascript/random+key+generator+javascript
};

// unique api key
function apikey() {
    return generateApiKey();
}