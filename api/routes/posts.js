const express = require('express'),
    postsCtrl = require('../controllers/posts.controller'),
    router = express.Router();

router.get('/', postsCtrl.getIndex);
router.get('/add-post', postsCtrl.addPost);
router.post('/create-post', postsCtrl.createPost);

module.exports = router;