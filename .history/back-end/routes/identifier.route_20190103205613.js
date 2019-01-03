var express = require('express');
var router = express.Router();
var receiver = require('../controllers/receivers.controller');
var tokenMiddleware = require('../middlewares/token');
var events = require('../controllers/event');

//router.get('/',receiver.getListReceivers);

router.post('/login', receiver.getRe_by_userName);
router.get('/shortadded', events.subscribeShortAdded); //đăng kí lấy data từ link shortadded
router.post('/add', receiver.shortAdd_Added);
router.get('/list', receiver.loadAdd);

//router.post('/login',tokenMiddleware.verifyAccessToken,receiver.verifying_User);
module.exports = router;
