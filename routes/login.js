var express = require('express');
var router = express.Router();

var app = express();
var auth = require('../passport');
var passport = auth.passport;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(passport.session && passport.session.id){
        res.render('index', { title: 'Login Success!' });
    } else {
        response.redirect('/auth/login');
    }   
});

router.get('/login',passport.authenticate('twitter'));
app.get('/auth/twitter/callback', 
    passport.authenticate('twitter', { successRedirect: '/',
                                                failureRedirect: '/login' }));
module.exports = router;
