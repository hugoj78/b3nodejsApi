/*
NOTE COUR

- configs
  - configs DB
  - configs JWT
  - configs server
- controllers
- models
- routes (definition des end points)
- services
  - DB
  - server
- utilities
  - midlleware: veirfyToken
*/

// Require
const app = require('./src/services/express.service');
const db = require('./src/services/mongoose.service');

// Express service
app.start();

// DB service
db.connect();

// CORS block
app.use(function (req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Accept', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin');
    next();
});
