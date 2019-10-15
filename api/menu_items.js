function GetAllItems(req, res) {
    const {knex}=req.app.locals;
    knex
        .select('name', 'email')
        .from('menu_item')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};

module.exports = {
    GetAllItems
};