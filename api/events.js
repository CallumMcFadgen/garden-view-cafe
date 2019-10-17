// get data for all events
function GetAllEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// get data for an individual event
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


// create a new event record
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


// update a event
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


// delete a event
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


module.exports = {
    GetAllEvents,
    GetEvent,
    PostEvent,
    Patchevent,
    DeleteEvent
};