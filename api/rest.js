// Set variabilesto support a range of instances that can be
// used for the applications routing
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
const config = require('./config');
const routes = require('./routes');
const middleware = require('./middleware');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const knex = require('knex')({client: 'mysql',connection: config.database});
 
app.locals.knex = knex;


// get all menu items, get one menu item, add a new menu item, update a menu item, delete a menu item
router.get('/menu-items', routes.menuItems.GetAllMenuItems);
router.get('/menu-items/breakfast', routes.menuItems.GetBreakfastMenu);
router.get('/menu-items/lunch', routes.menuItems.GetLunchMenu);
router.get('/menu-items/dinner', routes.menuItems.GetDinnerMenu);
router.get('/menu-items/:id', middleware.checkID, routes.menuItems.GetMenuItem);
router.post('/menu-items', jsonParser, routes.menuItems.PostMenuItem);
router.put('/menu-items/:id', jsonParser, routes.menuItems.PutMenuItem);
router.delete('/menu-items/:id', jsonParser, routes.menuItems.DeleteMenuItem);     // id checking removed, using name as ID


// get all item reviews, get one item review, add a new item review, update a item review, delete a item review
router.get('/item_reviews', routes.itemReviews.GetAllItemReviews);
router.get('/item_reviews/:id', middleware.checkID, routes.itemReviews.GetItemReview);
router.post('/item_reviews', jsonParser, routes.itemReviews.PostItemReview);
router.put('/item_reviews/:id', jsonParser, middleware.checkID, routes.itemReviews.PutItemReview);
router.delete('/item_reviews/:id', jsonParser, middleware.checkID, routes.itemReviews.DeleteItemReview);


// get all events, get one event, add a new event, update a event, delete a event
router.get('/events', routes.events.GetAllEvents);
router.get('/events/autumn', routes.events.GetAutumnEvents);
router.get('/events/spring', routes.events.GetSpringEvents);
router.get('/events/summer', routes.events.GetSummerEvents);
router.get('/events/winter', routes.events.GetWinterEvents);
router.get('/events/:id', middleware.checkID, routes.events.GetEvent);
router.post('/events', jsonParser, routes.events.PostEvent);
router.put('/events/:id', jsonParser, middleware.checkID, routes.events.PutEvent);
router.delete('/events/:id', jsonParser, middleware.checkID, routes.events.DeleteEvent);


// get all event reviews, get one event review, add a new event review, update a event review, delete a event review
router.get('/event_reviews', routes.eventReviews.GetAllEventReviews);
router.get('/event_reviews/:id', middleware.checkID, routes.eventReviews.GetEventReview);
router.post('/event_reviews', jsonParser, routes.eventReviews.PostEventReview);
router.put('/event_reviews/:id', jsonParser, middleware.checkID, routes.eventReviews.PutEventReview);
router.delete('/event_reviews/:id',  jsonParser, middleware.checkID, routes.eventReviews.DeleteEventReview);
 

// get all users, get one users, add a new users, update a users, delete a users
router.get('/users', routes.users.GetAllUsers);
router.get('/users/:id', middleware.checkID, routes.users.GetUser);
router.get('/users/:email/:password', routes.users.GetUserCredentials);                         // Get user info based on email and password (login)
router.post('/users', jsonParser, routes.users.PostUser);
router.post('/users/:firstname/:lastname/:password/:email', jsonParser, routes.users.PostUser);     // Register
router.put('/users/:id', jsonParser,  middleware.checkID, routes.users.PutUser);
router.delete('/users/:id', jsonParser, middleware.checkID, routes.users.DeleteUser);


app.use('/api', cors(), router);

app.listen(config.APIServerPort, () => {
    console.log(`server started on port ${config.APIServerPort}`);
})