const express = require('express');
const router = express.Router();
const passport = require('passport');
const {Pool, Client} = require('pg');
const models = require('../models');


const pool = new Pool();
/* GET users listing. */
router.get('/', passport.authenticate('jwt', { session: false }),
    function(req, res, next) {
        pool.query("SELECT origin.*, alert.subscribed FROM fires as origin JOIN \"Fires\" as alert ON (alert.feed_id = origin.id )", (err, result) => {
            if(err) {
                res.json({
                    error: err,
                })
            } else {
                res.json(result.rows);
            }
        })
    }
);

router.put('/', passport.authenticate('jwt', { session: false }),
    function(req, res, next) {
        if (req.user) {
            let userId = req.user.id;
            let data = req.body;
            models.Fire.update({subscribed: data.subscribed}, {
                where: {
                    UserId: userId,
                    feed_id: data.id
                },
                returning: true,
                plain: true,
            }).then(fires => {
                const text = "SELECT origin.*, alert.subscribed FROM fires as origin JOIN \"Fires\" as alert ON (alert.feed_id = origin.id)";
                pool.query(text, (err, result) => {
                    if (err) {
                        res.json({
                            error: err
                        })
                    } else {
                        res.json(result.rows);
                    }
                })
            })
        }
    }
);
router.put('/:id', passport.authenticate('jwt', { session: false }),
    function(req, res, next) {
        if (req.user) {
            let userId = req.user.id;
            let data = req.body;
            models.Fire.update({subscribed: data.subscribed}, {
                where: {
                    UserId: userId,
                    feed_id: data.id
                },
                returning: true,
                plain: true,
            }).then(fires => {
                const text = "SELECT origin.*, alert.subscribed FROM fires as origin JOIN \"Fires\" as alert ON (alert.feed_id = origin.id) WHERE origin.id = $1";
                const values = [data.id];
                pool.query(text, values, (err, result) => {
                    if (err) {
                        res.json({
                            error: err
                        })
                    } else {
                        res.json(result.rows[0]);
                    }
                })
            })
        }
    }
);

router.get('/:id', passport.authenticate('jwt', { session: false }),
    function(req, res, next) {
        const text = "SELECT origin.*, alert.subscribed FROM fires as origin JOIN \"Fires\" as alert ON (alert.feed_id = origin.id) WHERE origin.id = $1";
        const values = [req.params.id];

        pool.query(text, values, (err, result) => {
            if(err){
                res.json({
                    err: err
                })
            }
            if(result.rows) {
                res.json(result.rows[0])
            }
        });
    }
);


module.exports = router;

