var express = require('express');
var router = express.Router();
var corgi = require('../models/corgis');

/* GET home page. */
router.get('/', function(req, res, next) {
  var findcorgi = corgi.find({}, function(err, corgi) {
  var random = Math.floor(Math.random() * corgi.length);
  randC = corgi[random]

      if (err)console.log(err);
      console.log(corgi);

      res.render('index', {
          corgi: corgi,
          random: randC
      });
  });
});



module.exports = router;
