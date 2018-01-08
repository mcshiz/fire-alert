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
                },
                order: [
                    ['id', 'ASC'],
                ],

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
            let data = req.body;
            data.UserId = userId;
            models.Recipient.create(data, function(newRecipient) {
                if(!newRecipient) {
                    return done(null, false)
                }
                if(newRecipient) {
                    return done(null, newRecipient)
                }
            })
                .then((newRecipient) => {
                    models.Recipient.findAll({
                        where: {
                            UserId: userId
                        },
                        order: [
                            ['id', 'ASC']
                        ]
                    }).then(recipients => {
                        res.json(recipients);
                    });

                });

        } else {
            res.sendStatus(401);
        }


    }
);


router.put('/', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        if(req.user) {
            let userId = req.user.id;
            let recipientId = req.body.id;
            let data = req.body;

            models.Recipient.update(data, {
                where: {
                    UserId: userId,
                    id: recipientId
                },
                returning: true,
                plain: true,
            })
            .then(record => {
                models.Recipient.findAll({
                    where: {
                        UserId: userId
                    },
                    order: [
                        ['id', 'ASC'],
                    ],
                }).then(result => {
                    res.json(result)
                })
            });

        } else {
            res.sendStatus(401);
        }
    }
);



router.delete('/', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        if(req.user) {
            let userId = req.user.id;
            let recipientId = req.body.id;

            models.Recipient.destroy({
                where: {
                    UserId: userId,
                    id: recipientId
                },
                returning: true,
                plain: true,
            })
                .then(record => {
                    models.Recipient.findAll({
                        where: {
                            UserId: userId
                        },
                        order: [
                            ['id', 'ASC'],
                        ],
                    }).then(result => {
                        res.json(result)
                    })
                });

        } else {
            res.sendStatus(401);
        }
    }
);


module.exports = router;