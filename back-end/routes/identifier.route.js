var express = require('express');
var router = express.Router();
var receiver = require('../controllers/receivers.controller');
var tokenMiddleware = require('../middlewares/token');
var events = require('../controllers/event');
var identifier = require('../controllers/identifier.controller');


//router.get('/',receiver.getListReceivers);

router.post('/login',receiver.getRe_by_userName);
router.post('/update',identifier.updateFulladd);
//router.get('/login',tokenMiddleware.verifyAccessToken,receiver.verifying_User);

module.exports = router;
