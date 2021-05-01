var express = require('express');
var router = express.Router();
var cat = require('../model/catModel');

router.post('/', function (req, res, next) {
    console.log(req.body);
    cat.deleteAll(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports = router;