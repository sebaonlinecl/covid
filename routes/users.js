var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home/users', {users: 'Usuarios'});

});

module.exports = router;