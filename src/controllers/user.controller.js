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
        message: err.message || "Some error occured when findinf users."
      })
    })
}
