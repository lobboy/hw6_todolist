var express = require('express'),
    index   = require('../controllers/index'),
    index_post = require('../controllers/index_post'),
    person  = require('../controllers/person'),
    router  = express.Router();

router.route('/').get(index);
router.route('/r').post(index_post);
//router.route('/#').post(index_post);
//router.route('/person').post(person);

module.exports = router;