
const express = require('express'),
      mysqlCtrl = require('../controllers/mysq.controller'),
      router = express.Router();

router.get('/createDb', mysqlCtrl.createDb );

module.exports = router;