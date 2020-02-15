const mongoose = require('mongoose');
const Golf = require('../models/golf.model');
const Manager = require('../models/manager.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    Manager.findById(_id : )
    if(mongoose.Types.ObjectId.isValid(req.body.id_manager)) {
        const golfCreate = new Golf(
            {
                title: req.body.title,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                description: req.body.description,
                id_manager: req.body.id_manager
            }
        );

        golfCreate.save()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send(
                    {
                        message: err.message,
                    }
                )
            });
    }
};

// get all users
exports.findAll = (req, res) => {
    Golf.find()
        .then(golfs => {
            res.send(golfs);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred when finding golfs."
            })
        })
};

// Get User by Id
exports.findById = (req, res) => {
    Golf.findById(_id = req.params.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred when finding golfs."
            })
        })
};

// Update User by Id
exports.updateById = (req, res) => {
    Golf.findByIdAndUpdate(req.params.id, req.body)
        .then(golfs => {
            res.send(golfs);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred when finding and updating golf."
            })
        })
};

// Delete User by Id
exports.deleteByID = (req, res) => {
    Golf.findByIdAndDelete(req.params.id)
        .then(golfs => {
            res.send(golfs);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred when finding and deleting golf."
            })
        })
};

// Delete All User
exports.deleteAllGolfs = (req, res) => {
    Golf.remove()
        .then(golfs => {
            res.send(golfs);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred when finding and deleting all golfs."
            })
        })
};