// get data for all event reviews
function GetAllEventReviews(req, res, next) {
    const {knex}=req.app.locals;
    knex
        .select('*')
        .from('event_reviews')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// get data for an individual event review
function GetEventReview(req, res, next) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    knex
    .select('*')
    .from('event_reviews')
    .where({event_review_id: `${id}`})
    .then(data => {
        if(data.length > 0) {
            return res.status(200).json(data);
        }
        else {
            return res.status(404).json(`Event review ${id} could not be found`)
        }
    })
    .catch(error => res.status(500).json(error))
};


module.exports = {
    GetAllEventReviews,
    GetEventReview
};