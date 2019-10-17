// Get all reviews from the item reviews table
function GetAllItemReviews(req, res) {
    const {knex}=req.app.locals;
    knex
        .select('*')
        .from('item_reviews')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get an individual review from the item_reviews table
function GetItemReview(req, res) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    knex
    .select('*')
    .from('item_reviews')
    .where({item_review_id: `${id}`})
    .then(data => {
        if(data.length > 0) {
            return res.status(200).json(data);
        }
        else {
            return res.status(404).json(`Item review with the ID ${id} could not be found`)
        }
    })
    .catch(error => res.status(500).json(error))
};


// Create a new item_review row
function PostItemReview(req, res, next) {
    const {knex} = req.app.locals;
    const payload = req.body;

    // Setting mandatory fields
    const mandatoryColumns = ['item_review_reviewer_name', 'item_review_review'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));
    
    if(mandatoryColumnsExist) {
        knex('item_reviews')
            .insert(payload)
            .then(response => res.status(201).json(`New item review added`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Coloumns are required ${mandatoryColumns}`)
    }
};


// UPdate a item_review row
function PatchItemReview(req, res, next) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    const payload = req.body;
    knex('item_reviews')
        .where('item_review_id', id)
        .update(payload)
        .then(response => {
            if(response) {
                res.status(204).json(`Item review has been updated.`);
            }
            else {
                return res.status(404).json(`The item review with ID ${id} cannot be found.`)
            }
    })
    .catch(error => res.status(500).json(error));
};


// Exports
module.exports = {
    GetAllItemReviews,
    GetItemReview,
    PostItemReview,
    PatchItemReview
};