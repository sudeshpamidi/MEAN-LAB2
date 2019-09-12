const express = require('express');
const leaguesRoutes = express.Router();
var fs = require('fs');

leaguesRoutes.get('/', function(req, res) {

    res.statusCode = 200;
    res.send(JSON.parse(fs.readFileSync('./data/leagues.json')))
});

module.exports = leaguesRoutes;