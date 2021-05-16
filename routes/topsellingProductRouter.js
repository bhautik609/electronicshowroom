var express = require('express');
var router = express.Router();
var dashroutMember = require('../model/dashbordModel');
router.get('/', function (req, res, next) {
    dashroutMember.topSellingProducts(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;