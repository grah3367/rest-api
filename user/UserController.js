// UserController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var User = require('./User');

// create a new User 
/*
router.post('/', function(req, res){
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },
    function(err, user){
        if(err){
            return res.status(500).send("There was a problem adding the information to the database.");
        }
        res.status(200).send(user);
    });
});
*/

// returns all the users in the db
router.get('/', function (req, res) {

    User.find({}, function(err, users){
        if(err){
            return res.status(500).send("There was a problem finding the users.");
        }
        res.status(200).send(users);
    });
});


router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});


module.exports = router;
