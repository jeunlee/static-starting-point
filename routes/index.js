const express = require('express');
const router = express.Router();


var models = require('../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;

module.exports = router;

router.get('/', function (req, res, next) {

    Promise.all([
      Hotel.findAll(),
      Restaurant.findAll(),
      Activity.findAll()
    ])
      .then(function(array){
        res.render('index', {hotels: array[0], restaurants: array[1], activities: array[2]});
      })
      .catch(next);

});
