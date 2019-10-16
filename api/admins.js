//const mySQL = require('mysql');

function GetAllInfo(req, res) {
    const {knex}=req.app.locals;
    knex
        .select('*')
        .from('admin')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};

module.exports = {
    GetAllInfo
};