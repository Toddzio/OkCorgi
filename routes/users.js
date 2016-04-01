var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/', function(req, res, next) {
    var name = req.body.name;
    var age = req.body.age;
    var dogtag = req.body.dogtag;
    var image = req.body.image;

    var newUser = corgi({
        name: name,
        age: age,
        dogtag: dogtag,
        image: image
    });

    // Save the user
    newUser.save(function(err) {
        if (err) console.log(err);

        console.log('no err');

        res.send('User created!');
    });
});

router.get('/new', function(req, res, next) {
  res.render('new');
});



module.exports = router;
