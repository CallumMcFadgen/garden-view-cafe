
// GET API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get all of the event reviews data
function GetAllEventReviews(req, res, next) {
    const {knex}=req.app.locals;
    knex
        .select('*')
        .from('event_reviews')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get a specific event review based on the id of the event review
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


// POST API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a new event review record set
function PostEventReview(req, res, next) {
    const { knex } = req.app.locals;
    const payload = req.body;
    const mandatoryColumns = ['event_review_reviewer_name', 'event_review_review'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));

    if (mandatoryColumnsExist) {
        knex('event_reviews')
            .insert(payload)
            .then(response => res.status(201).json(`New event review added`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Columns are required ${mandatoryColumns}`)
    }
};


// PUT API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Update a specific event review record set based on the id of the event review
function PutEventReview(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    const payload = req.body;
    knex('event_reviews')
        .where('event_review_id', id)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json(`Event review ${id} has been updated.`);
            }
            else {
                return res.status(404).json(`Event review ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// DELETE API ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Delete a specific event review based on the event review id
function DeleteEventReview(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex('event_reviews')
        .where('event_review_id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(204).json(`Event review ${id} has been deleted.`);
            }
            else {
                res.status(400).json(`Event review ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// Export modules
module.exports = {
    GetAllEventReviews,
    GetEventReview,
    PostEventReview,
    PutEventReview,
    DeleteEventReview
};