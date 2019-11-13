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

exports.login = (req, res) => {
  // step 1: search user w email
  // step 2: check password 
  // step 3: generate new token

  User.findOne({ email: req.body.email })
    .then(user => {
      if (!bcrypt.compareSync(req.body.password, user.password)){
        return res.status(404).send({
          message: "wrong password"
        })
      }
      let usertoken = jwt.sign(
        {
          id: user.email,
          admin: user.admin
        },
        "supersecret",
        {
          expiresIn: 86400
        }
      )
      res.send({
        auth: true,
        token: usertoken,
        body: user
      });
    }).catch(err => {
      return res.status(500).send({
        message: err || "Error : user not found" 
      });
    });
}