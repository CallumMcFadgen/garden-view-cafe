// GET API ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get all of the item reviews data
function GetAllItemReviews(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('item_reviews')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get a specific item review based on the id of the item review
function GetItemReview(req, res) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex
        .select('*')
        .from('item_reviews')
        .where({ item_review_id: `${id}` })
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data);
            }
            else {
                return res.status(404).json(`Item review with the ID ${id} could not be found`)
            }
        })
        .catch(error => res.status(500).json(error))
};


// POST API ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a new item review record set
function PostItemReview(req, res, next) {
    const { knex } = req.app.locals;
    const payload = req.body;
    const mandatoryColumns = ['item_review_reviewer_name', 'item_review_review'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));

    if (mandatoryColumnsExist) {
        knex('item_reviews')
            .insert(payload)
            .then(response => res.status(201).json(`New item review added`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Columns are required ${mandatoryColumns}`)
    }
};


// PUT API ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Update a specific item review record set based on the id of the item review
function PutItemReview(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    const payload = req.body;
    knex('item_reviews')
        .where('item_review_id', id)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json(`Item review ${id} has been updated.`);
            }
            else {
                return res.status(404).json(`Item review ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// DELETE API ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Delete a specific item review record set based on the id of the item review
function DeleteItemReview(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex('item_reviews')
        .where('item_review_id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(204).json(`Item review ${id} has been deleted.`);
            }
            else {
                res.status(400).json(`Item review ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// Export modules
module.exports = {
    GetAllItemReviews,
    GetItemReview,
    PostItemReview,
    PutItemReview,
    DeleteItemReview
};