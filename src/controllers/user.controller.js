const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    admin: req.body.admin
  })
  if(err) {
    res.send(err);
  }
  else {
    user.save()
      .then(data => {
        res.send(data);
      }).catch(err => {
        console.log('[User] Failure to save user, see errors below \n',err);
      })
  }
}
