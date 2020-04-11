var express = require('express');
var router = express.Router();
const request = require('request');


_EXTERNAL_URL = 'https://api.covid19api.com/countries';

router.get('/', function (req, res, next) {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        var countries = body;
        console.log(body);
        
    });


    res.render('home/users', {
        users: 'PAISES'
    });

});

module.exports = router;