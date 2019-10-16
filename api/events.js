function GetAllInfo(req, res) {
    const {knex}=req.app.locals;
    knex
        .select('*')
        .from('events')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};

module.exports = {
    GetAllInfo
};