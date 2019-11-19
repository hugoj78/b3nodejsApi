const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
  let hashpassword = bcrypt.hashSync(req.body.password, 8);
  const user = new User({
    email: req.body.email,
    password: hashpassword,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    admin: req.body.admin
  })

  user.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}

// get all users
exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured when finding users."
      })
    })
}

// Get User by Id
exports.findById = (req, res) => {
  User.findById(_id = req.params.id)
  .then(users => {
    res.send(users);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured when finding user."
    })
  })
}

// Update User by Id
exports.updateById = (req, res) => {
  if(req.body.password = bcrypt.hashSync(req.body.password, 8))
  
  User.findByIdAndUpdate(req.params.id, req.body)
  .then(users => {
    res.send(users);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured when finding and updating user."
    })
  })
}

// Delete User by Id
exports.deleteByID = (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then(user => {
    res.send(user);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured when finding and deleting user."
    })
  })
}

// Delete All User
exports.deleteAllUser = (req, res) => {
  User.remove()
  .then(user => {
    res.send(user);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured when finding and deleting all user."
    })
  })
}