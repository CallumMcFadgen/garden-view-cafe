// Pull all table information
function GetAllInfo(req, res) {
    const {knex}=req.app.locals;
    knex
        .select('*')
        .from('menu_items')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Pull individual table record
function GetIndividualInfo(req, res) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    knex
    .select('*')
    .from('menu_items')
    .where({menu_item_id: `${id}`})
    .then(data => {
        if(data.length > 0) {
            return res.status(200).json(data);
        }
        else {
            return res.status(404).json(`Menu item with the ID ${id} could not be found`)
        }
    })
    .catch(error => res.status(500).json(error))
};


function PostNewItem(req, res, next) {
    const {knex} = req.app.locals;
    const payload = req.body;
    // Setting mandatory fields
    const mandatoryColumns = ['menu_item_name', 'menu_item_description', 'menu_item_price'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));
    
    if(mandatoryColumnsExist) {
        knex('menu_items')
            .insert(payload)
            .then(response => res.status(201).json(`New menu item added`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Coloumns are required ${mandatoryColumns}`)
    }
};


function PatchItem(req, res, next) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    const payload = req.body;
    knex('menu_items')
        .where('menu_item_id', id)
        .update(payload)
        .then(response => {
            if(response) {
                res.status(204).json(`The menu item has been updated.`);
            }
            else {
                return res.status(404).json(`A menu item with ID ${id} cannot be found.`)
            }
    })
    .catch(error => res.status(500).json(error));
};




// Exports 
module.exports = {
    GetAllInfo,
    GetIndividualInfo,
    PostNewItem,
    PatchItem
};