var express = require('express');
var router = express.Router();
var cors = require('cors');

controller = require('../controllers/controller')

router.post('/minttoken', cors(), controller.mintoken)
router.post('/transfertoken', cors(),controller.transfertoken)
router.get('/balance', cors(), controller.balanceOf)
router.get('/name', cors(), controller.name)

module.exports = router;
