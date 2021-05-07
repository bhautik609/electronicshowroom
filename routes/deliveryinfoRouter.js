var express = require('express');
var router = express.Router();
var detail = require('../model/dashbordModel');

router.get('/:order_id', function (req, res, next) {
    detail.onViewMoreInfo(req.params.order_id, function (err, rows) {
        console.log(req.params.order_id);
        if (err) {

            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;