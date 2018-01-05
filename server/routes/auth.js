const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jwt-simple');

router.post('/signup', function(req, res, next) {

    passport.authenticate('local-signup',function(err, user, info) {
        if(err) {
            return res.send(400, {...info})
        }
        if(!user) {
            return res.send(400, {...info})
        }
        req.login(user, function(err){
            if(err){
                return next(err);
            }
            return res.send({ success : true, message : 'Signup Success' });
        });
    })(req, res, next)
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
        if (err) {
            return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        if (!user) {
            return res.send(401,{ success : false, message : 'Invalid Username or Password' });
        }
        req.login(user, function(err){
            if(err){
                return next(err); // will generate 500 error
            }
            let payload = {
                id: user.id
            };

            let token = jwt.encode(payload, process.env.JWTSECRET);
            return res.send({token:token});
        });
    })(req, res, next);
});

module.exports = router;