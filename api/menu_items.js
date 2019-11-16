
// GET API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get all the menu items data
function GetAllMenuItems(req, res, next) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('menu_items')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get all the breakfast menu items data
function GetBreakfastMenu(req, res, next) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('menu_items')
        .where('menu_item_breakfast', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


//Get all the lunch menu items data
function GetLunchMenu(req, res, next) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('menu_items')
        .where('menu_item_lunch', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


//Get all the dinner menu items data
function GetDinnerMenu(req, res, next) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('menu_items')
        .where('menu_item_dinner', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get a specific menu item based on the id of the menu item
function GetMenuItem(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex
        .select('*')
        .from('menu_items')
        .where({ menu_item_id: `${id}` })
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            }
            else {
                return res.status(404).json(`Menu item ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error))
};


// POST API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a new menu item record set
function PostMenuItem(req, res, next) {
    const { knex } = req.app.locals;
    const payload = req.body;
    const mandatoryColumns = [
        'menu_item_name',
        'menu_item_description',
        'menu_item_price'];
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


    //set mandatory fields

// PUT API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Update a specific menu item record set based on the id of the menu item
function PutMenuItem(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    const payload = req.body;
    knex('menu_items')
        .where('menu_item_name', id)
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


// DELETE API ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Delete a specific menu item record set based on the id of the menu item
function DeleteMenuItem(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex('menu_items')
        .where('menu_item_name', id)
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


// Export modules 
module.exports = {
    GetAllMenuItems,
    GetBreakfastMenu,
    GetLunchMenu,
    GetDinnerMenu,
    GetMenuItem,
    PostMenuItem,
    PutMenuItem,
    DeleteMenuItem
};