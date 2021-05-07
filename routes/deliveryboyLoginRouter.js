var express = require('express');
var router = express.Router();
var ad = require('../model/deliveryModel');
router.post('/', function (req, res, next) {
    ad.deliveryBoylogin(req.body, function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows)
        }
    });
});
module.exports = router;