const Manager = require("../models/manager.model");

function verifyManager(req, res, next) {
    let id = req.body.id_manager;

    if(!id) {
        return res.status(400).send({
            message: "missing manager ID"
        });
    }

    Manager.findById(_id = id)
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred when finding golfs."
            })
        });

    next();
}

module.exports = verifyManager;