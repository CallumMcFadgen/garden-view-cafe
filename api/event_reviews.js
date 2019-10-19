// This function uses knex to select everything in the table (*) and returns
// With either an error json or a data json.
function GetAllEventReviews(req, res, next) {
    const {knex}=req.app.locals;
    knex
        .select('*')
        .from('event_reviews')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// This function uses knex to select everything in the table (*) for a specific record, the 
// record is accessed by the menu_id param and returns with either an error json
// or a data json.
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


// This function uses knex to create a new record in the table 
// with some specified mandatory columns, then populate the row 
// with the users input and return a successes json or an error json.
function PostEventReview(req, res, next) {
    const { knex } = req.app.locals;
    const payload = req.body;

    // set mandatory fields
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


// This function uses knex to update an existing record with a 
// payload of user input.  The record is specified by ID param.
function PatchEventReview(req, res, next) {
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


// This function uses knex to update an existing record with a 
// payload of user input.  The record is specified by ID param.
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


// exports 
module.exports = {
    GetAllEventReviews,
    GetEventReview,
    PostEventReview,
    PatchEventReview,
    DeleteEventReview
};