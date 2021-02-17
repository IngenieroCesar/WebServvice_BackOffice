
exports.success = function (req, res, data) {

    res.status(data.status).send(data);
}

exports.error = function (req, res, error) {
    
    res.status(error.status).send(error);
}