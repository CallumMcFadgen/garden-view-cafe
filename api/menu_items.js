// get data for all menu items
function GetAllMenuItems(req, res, next) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('menu_items')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// get data for an individual menu item
function GetMenuItem(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex
        .select('*')
        .from('menu_items')
        .where({ menu_item_id: `${id}` })
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data);
            }
            else {
                return res.status(404).json(`Menu item ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error))
};


// create a new menu item record
function PostMenuItem(req, res, next) {
    const { knex } = req.app.locals;
    const payload = req.body;

    // set mandatory fields
    const mandatoryColumns = ['menu_item_name', 'menu_item_description', 'menu_item_price'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));

    if (mandatoryColumnsExist) {
        knex('menu_items')
            .insert(payload)
            .then(response => res.status(201).json(`New menu item added`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Columns are required ${mandatoryColumns}`)
    }
};


// update a menu item
function PatchMenuItem(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    const payload = req.body;
    knex('menu_items')
        .where('menu_item_id', id)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json(`Menu item ${id} has been updated.`);
            }
            else {
                return res.status(404).json(`Menu item ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// delete a menu item
function DeleteMenuItem(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex('menu_items')
        .where('menu_item_id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(204).json(`Menu item ${id} has been deleted.`);
            }
            else {
                res.status(400).json(`Menu item ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// exports 
module.exports = {
    GetAllMenuItems,
    GetMenuItem,
    PostMenuItem,
    PatchMenuItem,
    DeleteMenuItem
};