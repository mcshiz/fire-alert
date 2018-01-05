const express = require('express');
const router = express.Router();
const passport = require('passport');
const {Pool, Client} = require('pg');


const pool = new Pool();
/* GET users listing. */
router.get('/', passport.authenticate('jwt', { session: false }),
    function(req, res, next) {
        pool.query("SELECT * FROM fires", (err, result) => {
            if(err) {
                res.json({
                    error: err,
                })
            } else {
                res.json(result.rows);
            }
        })
});
router.get('/:id', passport.authenticate('jwt', { session: false }),
    function(req, res, next) {
        const text = "SELECT * FROM fires WHERE id = $1";
        const values = [req.params.id];

        pool.query(text, values, (err, result) => {
            if(err){
                console.log(err)
            }
            if(result.rows) {
                res.json(result.rows[0])
            }
        });


});

module.exports = router;

