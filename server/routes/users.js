const models = require('../models');
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/user', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        if(req.user) {
            let user = req.user;
            let payload = {
                username: user.username,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                last_login: user.last_login,
                last_updated: user.last_updated
            };
            res.json(payload);
        } else {
            res.sendStatus(401);
        }


    }
);

module.exports = router;