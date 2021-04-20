var express = require('express');
var router = express.Router();
var myorders_rou = require("../model/orderModel");
router.get('/:user_id_fk', function (req, res, next) {
    myorders_rou.getMyOrdersById(req.params.user_id_fk, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;