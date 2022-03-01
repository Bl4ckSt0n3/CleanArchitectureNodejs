const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

const serviceLocator = require('./infrastructure/servicelocator');
const cors = require('cors');

const UserRoutes = require('./api/routes/userRoutes');
const authRoute = require('./api/routes/index');

const helmet = require('helmet');
    
// https://levelup.gitconnected.com/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce
const swaggerUi = require('swagger-ui-express'), 
    swaggerDocument = require('./swagger.json');


app.use(helmet());

app.get('/', (req, res) => {
    res.send("what's up my ass");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    '/swagger',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

app.set('serviceLocator', serviceLocator);

app.use('/api_auth', authRoute(app.get('serviceLocator')));
app.use('/api', UserRoutes(app.get('serviceLocator')));

// app.disable("x-powered-by");

// var routes = require('./api/routes/testRoute');
// const userRoutes = require('./api/routes/userRoutes');

// routes(app);
// userRoutes(app);

app.listen(port);

console.log('test RESTful API server started on: ' + port);