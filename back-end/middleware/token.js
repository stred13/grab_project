var jwt = require('jsonwebtoken');
const config = require('../config.js');
module.exports.verifyAccessToken = (req, res, next) => {
  // console.log(req.headers);
  var token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, config.secret, (err, payload) => {
      if (err) {
        res.statusCode = 403;
        res.json({
          msg: 'INVALID TOKEN',
          error: err
        });
      } else {
        req.token_payload = payload;
        next();
      }
    });
  } else {
    res.statusCode = 403;
    res.json({
      msg: 'NO TOKEN FOUND'
    });
  }
};
