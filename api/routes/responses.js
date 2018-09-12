const express = require('express'),
    responseCtrl = require('../controllers/responses.controller'),
    router = express.Router();

router.get('/add-response/:id', responseCtrl.addResponse);
router.post('/create-response', responseCtrl.createResponse);
router.get('/list-responses/:id', responseCtrl.listResponses);

module.exports = router;