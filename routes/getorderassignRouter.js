var express = require('express');
var router = express.Router();
var ordernot = require('../model/orderModel');

router.get('/', function (req, res, next) {
    ordernot.getOrderAssigned(function (err, rows) {
        if (err) {
            res.json(err);
        }
        if (rows) {
            res.json(rows);
        }
    });
});
module.exports = router