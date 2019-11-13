const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    // First step: get token
    let token = req.headers['x-access-token'];
    // Second step: 
    if(!token) {
        return res.status(400).send({
            auth:false,
            message: 'missing token'
        })
    }
    jwt.verify(token, configs.jwt.secret, function(err, decoded){
        if(err) {
            console.log(err);
            return res.status(401).send({
                auth:false,
                message: 'no authorized'
            })
        }
    });
}