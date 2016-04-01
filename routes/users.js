var express = require('express');
var router = express.Router();
var corgi = require('../models/corgis');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(ourcorgi);
  res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
    var findcorgi = corgi.find({}, function(err, corgi) {
        if (err)console.log(err);
        console.log(corgi);
        res.render('list', {
            title:'Corgi',
            corgi: corgi
        });
    });
});

router.post('/', function(req, res, next){
  var pawUp = req.body.pawUp;
  pawUp.save
})


router.post('/', function(req, res, next) {
    var name = req.body.name;
    var age = req.body.age;
    var dogtag = req.body.dogtag;
    var image = req.body.image;

    var newCorgi = corgi({
        name: name,
        age: age,
        dogtag: dogtag,
        image: image
    });
    console.log(newCorgi);
    // Save the user
    newCorgi.save(function(err) {
        if (err) console.log(err);

        console.log('no err');

        res.send('User created!');
    });
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.get('/show', function(req, res, next) {
  res.render('show', {title: 'OkCorgi'});
});




module.exports = router;
