var express = require('express');
var router = express.Router();
var request = require('request');


api_url = 'https://api.covid19api.com/dayone/country/chile/status/confirmed';

router.get('/', function (req, res, next) {
    request(api_url, { json: true }, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        var summary = body;        
        
    });


    res.render('home/users', {
        users: 'Country Summary'
    });

});

module.exports = router;