var express = require('express');
var router = express.Router();
var myorders_rou = require("../model/orderModel");
router.get('/:order_id', function (req, res, next) {
    myorders_rou.getOrderDetailsByOrderIdNotAssign(req.params.order_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;