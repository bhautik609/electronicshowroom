var express = require('express');
var router = express.Router();
var UserOrderCheck = require('../model/deliveryModel');

router.get('/:order_id', function (req, res, next) {
    UserOrderCheck.getOrderAssigned(req.params.order_id, function (err, rows) {
        if (err) {
            console.log('error');
            res.json(err);
        }
        else {
            console.log('rows');
            res.json(rows);
        }
    });
});


module.exports = router;