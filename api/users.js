
// GET API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get all of the users data
function GetAllUsers(req, res) {
    const {knex}=req.app.locals;
    knex
        .select('*')
        .from('users')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get a specific user based on the id of the user
function GetUser(req, res) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    knex
    .select('*')
    .from('users')
    .where({user_id: `${id}`})
    .then(data => {
        if(data.length > 0) {
            return res.status(200).json(data);
        }
        else {
            return res.status(404).json(`User ${id} could not be found`)
        }
    })
    .catch(error => res.status(500).json(error))
};


// POST API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a new user record set
function PostUser(req, res, next) {
    const { knex } = req.app.locals;
    const payload = req.body;
    const mandatoryColumns = ['user_first_name', 'user_last', 'user_password', 'user_email', 'user_admin_status'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));

    if (mandatoryColumnsExist) {
        knex('users')
            .insert(payload)
            .then(response => res.status(201).json(`New user added`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Columns are required ${mandatoryColumns}`)
    }
};


// PUT API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Update a specific user record set based on the id of the user
function PutUser(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    const payload = req.body;
    knex('users')
        .where('user_id', id)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json(`User ${id} has been updated.`);
            }
            else {
                return res.status(404).json(`User ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// DELETE API ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Delete a specific user record set based on the id of the user
function DeleteUser(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex('user')
        .where('user_id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(204).json(`User ${id} has been deleted.`);
            }
            else {
                res.status(400).json(`User ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// Export modules
module.exports = {
    GetAllUsers,
    GetUser,
    PostUser,
    PutUser,
    DeleteUser
};