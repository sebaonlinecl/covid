var express = require('express');
var router = express.Router();
var unirest = require("unirest");
var req = unirest("GET", "https://covid-19-data.p.rapidapi.com/totals");

req.query({
	"format": "undefined"
});

req.headers({
	"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
	"x-rapidapi-key": "f5b92eda59mshb66a04927195ce9p10636cjsnc11c03c54775"
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

router.get('/', function(req, res, next) {
    res.render('home/welcome', {sitename: 'CovidApp'});



});

module.exports = router;


