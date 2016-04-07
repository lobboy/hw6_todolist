var express = require('express'),
    hw6   = require('../controllers/hw6'),
    hw6_post   = require('../controllers/hw6_post'),
    router  = express.Router();

router.route('/').get(hw6);
router.route('/r').post(hw6_post);
//router.route('/person').post(person);

module.exports = router;