// This function checks that a id is an integer (data validation)
// if the id is not then the function throws an error
function checkID(req, res, next) {
    const id = +req.params.id;
    if(Number.isInteger(id)) {
        next();
    }
    else {
        return res.status(400).json(`ID must be an integer.`);
    };
};


// Export modules
module.exports = {
    checkID
};