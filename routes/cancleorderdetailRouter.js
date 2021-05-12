var express = require('express');
var router = express.Router();
var CancelOrder = require('../model/orderDetailModel');
router.delete('/:order_id', function (req, res, next) {
    CancelOrder.CancelOrderDetails(req.params.order_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;