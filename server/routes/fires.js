var express = require('express');
var router = express.Router();
const {Pool, Client} = require('pg');


const pool = new Pool();
/* GET users listing. */
router.get('/', function(req, res, next) {
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
router.get('/:id', function(req, res, next) {

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

