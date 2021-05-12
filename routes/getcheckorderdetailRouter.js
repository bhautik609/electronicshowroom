var express = require('express');
var router = express.Router();
var UserOrderChecked = require('../model/usercheckStustModel');

router.get('/:order_id', function (req, res, next) {
    UserOrderChecked.getOrderAssignedDetails(req.params.order_id, function (err, rows) {
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