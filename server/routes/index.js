var router = require('express').Router();

router.get('/user', require('./user/user'));
router.get('/login', require('./login/login'));
router.get('/', function(req, res, next){
    res.redirect('/login');
});


module.exports = router;