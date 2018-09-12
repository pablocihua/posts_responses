
const express = require('express'),
      postsCtrl = require('../controllers/posts.controller'),
      router = express.Router();

router.get('/', postsCtrl.getPosts );

module.exports = router;