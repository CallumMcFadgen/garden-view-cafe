const express = require('express');
const app = express();
const router = express.router();

const config = require('./config');
const routes = require('./routes');
const middleware = require('./middleware');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const knex = require('knex') (
    {
        client: 'mysql',
        connection: config.database
    }
);
app.locals.knex = knex;


// Apprently needed
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});