var express = require('express');
var router = express.Router();
var DashRouter = require('../model/dashbordModel');
router.get('/', function (req, res, next) {
    DashRouter.TotalCashOnHand(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/:u_EmailId', function (req, res, next) {
    DashRouter.DeliveryBoyTodaysCash(req.params.u_EmailId, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router