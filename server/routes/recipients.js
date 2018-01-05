const models = require('../models');
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        if(req.user) {
            let user = req.user;

            models.Recipient.findAll({
                where: {
                    UserId: user.id
                }
            }).then((recipients) => {
                res.json(recipients);
            });

        } else {
            res.sendStatus(401);
        }


    }
);
router.post('/', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        if(req.user) {
            let userId = req.user.id;

            var userpassword = 'fuckkkkk';
            var data = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
                phone_number: 1234567890,
                password: userpassword,
                UserId: userId
            };
            models.Recipient.create(data, function(newRecipient) {
                if(!newRecipient) {
                    return done(null, false)
                }
                if(newRecipient) {
                    return done(null, newRecipient)
                }
            })
            .then((newRecipient) => {
                console.log(newRecipient);
                res.json(newRecipient);
            });

        } else {
            res.sendStatus(401);
        }


    }
);

module.exports = router;