var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

const serviceLocator = require('./infrastructure/servicelocator');

    
// https://levelup.gitconnected.com/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.get('/', (req, res) => {
    res.send("fuck you");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    '/swagger',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

app.set('serviceLocator', serviceLocator);


const routes = require('./api/routes/userRoutes');
app.use('/api', routes(app.get('serviceLocator')));



// var routes = require('./api/routes/testRoute');
// const userRoutes = require('./api/routes/userRoutes');

// routes(app);
// userRoutes(app);

app.listen(port);

console.log('test RESTful API server started on: ' + port);