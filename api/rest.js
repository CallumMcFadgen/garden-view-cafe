const express = require('express');
const app = express();
const router = express.Router();

const config = require('./config');
const routes = require('./routes');
const middleware = require('./middleware');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Create a knex object
const knex = require('knex') (
    {
        client: 'mysql',
        connection: config.database
    }
);
app.locals.knex = knex;


// Needed to avoid an "incorrect headers" error
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// Pull all items, pull single items, post new item, patch menu item from menu_items table
router.get('/menu-items', routes.menuItems.GetAllMenuItems);
router.get('/menu-items/:id', middleware.checkID, routes.menuItems.GetMenuItem);
router.post('/menu-items', jsonParser, routes.menuItems.PostMenuItem);
router.patch('/menu-items/:id', jsonParser, middleware.checkID, routes.menuItems.PatchMenuItem);


// Pull all reviews, pull a single review from the item_reviews table
router.get('/item-reviews', routes.itemReviews.GetAllItemReviews);
router.get('/item-reviews/:id', middleware.checkID, routes.itemReviews.GetIndividualItemReview);
router.post('/item-reviews', jsonParser, routes.itemReviews.PostMenuItemReview);
router.patch('/item-reviews/:id', jsonParser, middleware.checkID, routes.itemReviews.PatchMenuItemReview);


// Pull all data from the events table
router.get('/events', routes.events.GetAllInfo);

// Pull all data from the event_reviews table
router.get('/event_reviews', routes.eventReviews.GetAllInfo);

// Pull all data from the admin table
router.get('/admins', routes.admins.GetAllInfo);



// Pull single items data from the events table
router.get('/events/:id', middleware.checkID, routes.events.GetIndividualInfo);

// Pull single items data from the event_reviews table
router.get('/event_reviews/:id', middleware.checkID, routes.eventReviews.GetIndividualInfo);

// Pull single items data from the event_reviews table
router.get('/admins/:id', middleware.checkID, routes.admins.GetIndividualInfo);





app.use('/api', router);


// 
app.listen(config.APIServerPort, () => {
        console.log(`server started on port ${config.APIServerPort}`);
})