
// GET API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get all of the events data
function GetAllEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get all of the events data for autumn
function GetAutumnEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .where('event_autumn', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get all of the events data for spring
function GetSpringEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .where('event_spring', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get all of the events data for summer
function GetSummerEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .where('event_summer', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get all of the events data for winter
function GetWinterEvents(req, res) {
    const { knex } = req.app.locals;
    knex
        .select('*')
        .from('events')
        .where('event_winter', true)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};


// Get a specific event based on the id of the event
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

// Create a new event record set
function PostEvent(req, res, next) {
    const { knex } = req.app.locals;
    const payload = req.body;
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

// Update a specific event record set based on the id of the event
function PutEvent(req, res, next) {
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

// Delete a specific evnt record set based on the id of the event
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
    PutEvent,
    DeleteEvent
};