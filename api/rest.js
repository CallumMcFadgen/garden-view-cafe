const express = require('express');
const app = express();
const router = express.Router();

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


// Needed to avoid a "incorrect headers" error
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// Pull all data from the menu_items table
router.get('/menu-items', routes.menuItems.GetAllInfo);

// Pull all data from the item_reviews table
router.get('/item-reviews', routes.itemReviews.GetAllInfo);

// Pull all data from the events table
router.get('/events', routes.events.GetAllInfo);

// Pull all data from the event_reviews table
router.get('/event_reviews', routes.eventReviews.GetAllInfo);

// Pull all data from the admin table
router.get('/admins', routes.admin.GetAllInfo);


app.use('/api', router);


app.listen(config.APIServerPort, () => {
        console.log(`server started on port ${config.APIServerPort}`);
})