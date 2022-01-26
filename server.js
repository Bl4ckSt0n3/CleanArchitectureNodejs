var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    model = require('./api/models/testModel');
    
// https://levelup.gitconnected.com/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.get('/', (req, res) => {
    res.send("fuck");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    '/swagger',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);



var routes = require('./api/routes/testRoute');
var userRoutes = require('./api/routes/userRoutes');

routes(app);
userRoutes(app);

app.listen(port);

console.log('test RESTful API server started on: ' + port);