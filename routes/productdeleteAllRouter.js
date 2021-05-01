var express = require('express');
var router = express.Router();
var prophoto = require('../model/productModel');

router.post('/', function (req, res, next) {
    prophoto.deleteAll(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports = router;