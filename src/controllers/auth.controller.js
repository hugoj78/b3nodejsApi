const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
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
      let usertoken = jwt.sign(
        {
          id:user.email,
          admin:user.admin
      },
      "supersecret",
      {
        expiresIn:86400
      }
      )
      res.send({
        auth: true,
        token: usertoken,
        body: data
      });
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}
