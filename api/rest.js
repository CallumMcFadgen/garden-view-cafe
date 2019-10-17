const express = require('express');
const app = express();
const router = express.Router();

const config = require('./config');
const routes = require('./routes');
const middleware = require('./middleware');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Create a knex object
const knex = require('knex')(
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


// get all menu items, get one menu item, add a new menu item, update a menu item, delete a menu item
router.get('/menu-items', routes.menuItems.GetAllMenuItems);
router.get('/menu-items/:id', middleware.checkID, routes.menuItems.GetMenuItem);
router.post('/menu-items', jsonParser, routes.menuItems.PostMenuItem);
router.patch('/menu-items/:id', jsonParser, middleware.checkID, routes.menuItems.PatchMenuItem);
router.delete('/menu-items/:id', jsonParser, middleware.checkID, routes.menuItems.DeleteMenuItem);


// get all item reviews, get one item review, add a new item review, update a item review, delete a item review
router.get('/item-reviews', routes.itemReviews.GetAllItemReviews);
router.get('/item-reviews/:id', middleware.checkID, routes.itemReviews.GetItemReview);
router.post('/item-reviews', jsonParser, routes.itemReviews.PostItemReview);
router.patch('/item-reviews/:id', jsonParser, middleware.checkID, routes.itemReviews.PatchItemReview);
router.delete('/item-reviews/:id', jsonParser, middleware.checkID, routes.itemReviews.DeleteItemReview);


// get all events, get one event, add a new event, update a event, delete a event
router.get('/events', routes.events.GetAllEvents);
router.get('/events/:id', middleware.checkID, routes.events.GetEvent);
router.post('/events', jsonParser, routes.events.PostEvent);
router.patch('/events/:id', jsonParser, middleware.checkID, routes.events.Patchevent);
router.delete('/events/:id', jsonParser, middleware.checkID, routes.events.DeleteEvent);


// get all event reviews, get one event review, add a new event review, update a event review, delete a event review
router.get('/event_reviews', routes.eventReviews.GetAllEventReviews);
router.get('/event_reviews/:id', middleware.checkID, routes.eventReviews.GetEventReview);
router.post('/event_reviews', jsonParser, routes.eventReviews.PostEventReview);
router.patch('/event_reviews/:id', jsonParser, middleware.checkID, routes.eventReviews.PatchEventReview);
router.delete('/event_reviews/:id',  jsonParser, middleware.checkID, routes.eventReviews.DeleteEventReview);
 

// get all admins, get one admin, add a new admin, update a admin, delete a admin
router.get('/admins', routes.admins.GetAllAdmins);
router.get('/admins/:id', middleware.checkID, routes.admins.GetAdmin);
router.post('/admins', jsonParser, routes.admins.PostAdmin);
router.patch('/admins/:id', jsonParser,  middleware.checkID, routes.admins.PatchAdmin);
router.delete('/admins/:id', jsonParser, middleware.checkID, routes.admins.DeleteAdmin);


app.use('/api', router);

app.listen(config.APIServerPort, () => {
    console.log(`server started on port ${config.APIServerPort}`);
})