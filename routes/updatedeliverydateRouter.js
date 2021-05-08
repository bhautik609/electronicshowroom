var express = require('express');
var router = express.Router();
var dateUpdate = require('../model/deliveryModel');

router.post('/', function (req, res, next) {
    dateUpdate.upadteDeliveryDate(req.body, function (err, rows) {
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
router.get('/:fk_u_EmailId', function (req, res, next) {
    dateUpdate.pastDelievredOrder(req.params.fk_u_EmailId, function (err, rows) {
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