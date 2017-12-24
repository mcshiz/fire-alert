var express = require('express');
var router = express.Router();
var Twit = require('twit');

router.get('/:hashtag', function(req, res, next) {
    let Twitter = new Twit({
        consumer_key: process.env.TWITTERKEY,
        consumer_secret: process.env.TWITTERSECRET,
        app_only_auth: true,
        timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
    });
    if(req.params.hashtag === 'undefined') {
        let notFound = new Error('Hashtag not provided yet');
        notFound.status = 400;
        notFound.message = "Invalid Twitter Hashtag";
        return next(notFound);
    }
    let searchTerm = `#${req.params.hashtag}`;
    Twitter.get('search/tweets', { q: searchTerm, count: 100 }, function(err, data, response) {
        res.json(data)
    })
});


module.exports = router;

