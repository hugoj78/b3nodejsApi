const express = require('express');
const config = require('../configs/server.config.js');
const bodyParser = require('body-parser');
const apiRouter = require('../routes');

// Start express
const app = express();

// Middleware
app.use(bodyParser.json());

// CORS block
app.use(function (req, res, next) {
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Accept', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin');
  next();
});

// routes
app.use('/api/v1', apiRouter);

exports.start = () => {
  let port = config.port;

  app.listen(port, (err) => {
    if(err) {
      console.log(`Error:${err}`);
      //console.log('Error: ',port);
      //console.log('Error: '.err);
      process.exit(-1);
    }
    console.log(`app is running on port ${port}`);
  })
}
