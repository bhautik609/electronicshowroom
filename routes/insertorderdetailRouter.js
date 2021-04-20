var express = require('express');
var router = express.Router();
var orDetails = require('../model/orderDetailModel');
router.post('/', function (req, res, next) {
    orDetails.insertOrderDetail(req.body, function (err, rows) {
        console.log(req.body);
        console.log("details routes");
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;