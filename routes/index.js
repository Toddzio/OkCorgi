var express = require('express');
var router = express.Router();
var corgi = require('../models/corgis');

/* GET home page. */
router.get('/', function(req, res, next) {
  var findcorgi = corgi.find({}, function(err, corgi) {
  var random = corgi[Math.floor(Math.random() * findcorgi.length)];
  randomCorgi = corgi[random];

      if (err)console.log(err);
      console.log(corgi);

      res.render('index', {
          corgi: corgi,
          random: randomCorgi
      });
  });
});



module.exports = router;
