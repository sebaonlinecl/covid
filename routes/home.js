var express = require('express');
var router = express.Router();
const request = require('request');

var api_url = 'https://api.covid19api.com/countries';

router.get('/', function (req, res, next) {
    request(api_url, { json: true }, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        var countries = body;
        console.log(countries);
        countries.forEach(element => {
            console.log(element["Country"]);
        });
        
        
        
    });

    res.render('home/welcome', { sitename: 'CovidApp' });

});

module.exports = router;