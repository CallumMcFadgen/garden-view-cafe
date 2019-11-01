
// GET API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function GetAllEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


function GetAutumnEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .where('event_autumn', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


function GetSpringEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .where('event_spring', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


function GetSummerEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .where('event_summer', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


function GetWinterEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .where('event_winter', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


function GetEvent(req, res) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex
        .select('*')
        .from('events')
        .where({ event_id: `${id}` })
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data);
            }
            else {
                return res.status(404).json(`Event ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error))
};


// POST API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function PostEvent(req, res, next) {
    const { knex } = req.app.locals;
    const payload = req.body;

    // set mandatory fields
    const mandatoryColumns = ['event_name', 'event_description', 'event_price'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));

    if (mandatoryColumnsExist) {
        knex('events')
            .insert(payload)
            .then(response => res.status(201).json(`New event added`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Columns are required ${mandatoryColumns}`)
    }
};


// PUT API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Patchevent(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    const payload = req.body;
    knex('events')
        .where('event_id', id)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json(`Event ${id} has been updated.`);
            }
            else {
                return res.status(404).json(`Event ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// DELETE API ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function DeleteEvent(req, res, next) {
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex('events')
        .where('event_id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(204).json(`Event ${id} has been deleted.`);
            }
            else {
                res.status(400).json(`Event ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};


// Export modules
module.exports = {
    GetAllEvents,
    GetAutumnEvents,
    GetSpringEvents,
    GetSummerEvents,
    GetWinterEvents,
    GetEvent,
    PostEvent,
    Patchevent,
    DeleteEvent
};