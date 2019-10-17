// get data for all admins
function GetAllAdmins(req, res) {
    const {knex}=req.app.locals;
    knex
        .select('*')
        .from('admins')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// get data for an individual admin
function GetAdmin(req, res) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    knex
    .select('*')
    .from('admins')
    .where({admin_id: `${id}`})
    .then(data => {
        if(data.length > 0) {
            return res.status(200).json(data);
        }
        else {
            return res.status(404).json(`Admin ${id} could not be found`)
        }
    })
    .catch(error => res.status(500).json(error))
};


// create a new admin record
function PostAdmin(req, res, next) {
    const { knex } = req.app.locals;
    const payload = req.body;

    // set mandatory fields
    const mandatoryColumns = ['admin_user_name', 'admin_password', 'admin_email'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));

    if (mandatoryColumnsExist) {
        knex('admins')
            .insert(payload)
            .then(response => res.status(201).json(`New admin added`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Columns are required ${mandatoryColumns}`)
    }
};


// update a admin
function PatchAdmin(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    const payload = req.body;
    knex('admins')
        .where('admin_id', id)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json(`Admin ${id} has been updated.`);
            }
            else {
                return res.status(404).json(`Admin ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// delete a admin
function DeleteAdmin(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex('admins')
        .where('admin_id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(204).json(`Admin ${id} has been deleted.`);
            }
            else {
                res.status(400).json(`Admin ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


module.exports = {
    GetAllAdmins,
    GetAdmin,
    PostAdmin,
    PatchAdmin,
    DeleteAdmin
};