var express = require('express');
var router = express.Router();
var receiver = require('../controllers/receivers.controller');
var tokenMiddleware = require('../middlewares/token');
var events = require('../controllers/event');

//router.get('/',receiver.getListReceivers);

router.post('/login',receiver.getRe_by_userName);



//router.post('/login',tokenMiddleware.verifyAccessToken,receiver.verifying_User);
module.exports = router;