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


// Exports 
module.exports = {
    GetAllInfo,
    GetIndividualInfo
};